import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LogoPosition {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  velocity: { x: number; y: number };
}

export default function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [logoPositions, setLogoPositions] = useState<LogoPosition[]>([]);

  // Initialize base positions
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      // Create many more particles for asteroid stream effect
      const particleCount = 45; // Increased from 25 to 45
      const newPositions: LogoPosition[] = [];

      for (let i = 0; i < particleCount; i++) {
        // Create flowing stream pattern - positioned further away
        const streamAngle = (i / particleCount) * Math.PI * 2;
        const streamRadius = Math.random() * 0.2 + 0.8; // 80-100% of screen - further away
        const streamOffset = Math.random() * 0.3 - 0.15; // More random offset

        // Position particles in flowing streams - further from center
        const x =
          rect.width *
          (0.5 + Math.cos(streamAngle) * streamRadius + streamOffset);
        const y =
          rect.height *
          (0.5 + Math.sin(streamAngle) * streamRadius + streamOffset);

        // Add more random distribution for natural look
        const randomX = x + (Math.random() - 0.5) * rect.width * 0.6;
        const randomY = y + (Math.random() - 0.5) * rect.height * 0.6;

        newPositions.push({
          x: randomX,
          y: randomY,
          baseX: randomX,
          baseY: randomY,
          velocity: { x: 0, y: 0 },
        });
      }

      setLogoPositions(newPositions);
    }
  }, []);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fluid physics animation
  useEffect(() => {
    const animate = () => {
      setLogoPositions(prev =>
        prev.map((logo, index) => {
          const mouse = mouseRef.current;
          const distance = Math.sqrt(
            Math.pow(mouse.x - logo.x, 2) + Math.pow(mouse.y - logo.y, 2)
          );

          // Fluid resistance and buoyancy - reduced influence for distant effect
          const maxDistance = 150; // Smaller influence radius for distant feel
          const influence = Math.max(0, 1 - distance / maxDistance);
          const force = influence * 0.6; // Reduced push strength for subtlety

          // Calculate repulsion force
          const angle = Math.atan2(logo.y - mouse.y, logo.x - mouse.x);
          const repulsionX = Math.cos(angle) * force * 15;
          const repulsionY = Math.sin(angle) * force * 15;

          // Add flowing asteroid-like movement - slower and more flowy
          const time = Date.now() * 0.0005; // Slower time factor
          const flowSpeed = 0.1 + (index % 4) * 0.15; // Much slower speeds
          const floatX = Math.sin(time * flowSpeed + index * 0.3) * 2.5; // Larger movement
          const floatY = Math.cos(time * flowSpeed * 0.6 + index * 0.2) * 2.5; // Larger movement

          // Update velocity with damping - more flowy
          const newVelocityX = logo.velocity.x * 0.98 + repulsionX + floatX; // Less damping
          const newVelocityY = logo.velocity.y * 0.98 + repulsionY + floatY; // Less damping

          // Update position
          const newX = logo.x + newVelocityX;
          const newY = logo.y + newVelocityY;

          // Return to base position gradually - much slower for flowy feel
          const returnForce = 0.008; // Much slower return for more flowy movement
          const returnX = logo.baseX + (newX - logo.baseX) * (1 - returnForce);
          const returnY = logo.baseY + (newY - logo.baseY) * (1 - returnForce);

          return {
            ...logo,
            x: returnX,
            y: returnY,
            velocity: { x: newVelocityX, y: newVelocityY },
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="cardano-logos"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
      }}
    >
      {logoPositions.map((logo, index) => {
        // Create varying sizes for asteroid-like effect - smaller for distance
        const baseSize = 40 + (index % 5) * 15; // 40-100px range - smaller
        const sizeVariation = Math.sin(index * 0.5) * 8;
        const finalSize = baseSize + sizeVariation;

        // Varying opacity for depth effect - less transparent
        const baseOpacity = 0.08; // Increased from 0.025
        const opacityVariation = (index % 4) * 0.015; // More variation
        const finalOpacity = baseOpacity + opacityVariation;

        return (
          <Image
            key={index}
            src={`/cardano_we_logos/PNG/Cardano-RGB_Logo-Icon-${index % 2 === 0 ? "White" : "Black"}.png`}
            alt="Cardano"
            width={finalSize}
            height={finalSize}
            className="cardano-logo"
            style={{
              position: "absolute",
              left: `${logo.x}px`,
              top: `${logo.y}px`,
              transform: "translate(-50%, -50%)",
              width: `${finalSize}px`,
              height: `${finalSize}px`,
              opacity: finalOpacity,
              filter: "brightness(1.1) contrast(1.3) blur(0.3px)",
              transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
              pointerEvents: "none",
            }}
          />
        );
      })}
    </div>
  );
}
