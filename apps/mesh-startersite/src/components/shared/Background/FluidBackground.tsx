import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { LearnerPersona } from "../../../types/personas";

interface LogoPosition {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  velocity: { x: number; y: number };
}

interface FluidBackgroundProps {
  persona?: LearnerPersona | null;
}

export default function FluidBackground({ persona }: FluidBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const [logoPositions, setLogoPositions] = useState<LogoPosition[]>([]);

  // Get persona-specific color scheme
  const getPersonaColors = () => {
    switch (persona) {
      case "ai-user": // Developing Builder - Purple theme
        return {
          primary: "rgba(147, 51, 234, 0.5)", // Purple with higher opacity
          secondary: "rgba(168, 85, 247, 0.5)", // Lighter purple
          accent: "rgba(196, 181, 253, 0.5)", // Very light purple
          background: "rgba(147, 51, 234, 0.5)", // Subtle purple background tint
        };
      case "ai-power-user": // Advanced Builder - Red theme
        return {
          primary: "rgba(239, 68, 68, 0.5)", // Red with higher opacity
          secondary: "rgba(248, 113, 113, 0.5)", // Lighter red
          accent: "rgba(254, 202, 202, 0.5)", // Very light red
          background: "rgba(239, 68, 68, 0.5)", // Subtle red background tint
        };
      default: // brand-new-to-ai or no persona - Default blue theme
        return {
          primary: "rgba(0, 51, 173, 0.5)", // Dark Blue #0033AD with opacity
          secondary: "rgba(51, 102, 204, 0.5)", // Lighter variant of the dark blue
          accent: "rgba(102, 153, 230, 0.5)", // Even lighter variant
          background: "rgba(0, 51, 173, 0.5)", // Subtle dark blue background tint
        };
    }
  };

  const colors = getPersonaColors();

  // Initialize logo positions
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const positions: LogoPosition[] = [];

      // Create 12 logo positions with random initial positions
      for (let i = 0; i < 12; i++) {
        const baseX = Math.random() * container.offsetWidth;
        const baseY = Math.random() * container.offsetHeight;
        positions.push({
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          velocity: { x: 0, y: 0 },
        });
      }

      setLogoPositions(positions);
    }
  }, []);

  // Mouse move handler
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
  }, []); // Empty dependency array - only run once

  return (
    <>
      {/* Persona-specific background overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          background: `radial-gradient(circle at 20% 80%, ${colors.background} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${colors.background} 0%, transparent 50%)`,
          zIndex: 1,
        }}
      />

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
          zIndex: 2,
        }}
      >
        {logoPositions.map((logo, index) => {
          // Create varying sizes for asteroid-like effect - smaller for distance
          const baseSize = 40 + (index % 5) * 15; // 40-100px range - smaller
          const sizeVariation = Math.sin(index * 0.5) * 8;
          const finalSize = baseSize + sizeVariation;

          // Varying opacity for depth effect with persona-specific colors
          const baseOpacity = 0.12; // Higher base opacity for more visibility
          const opacityVariation = (index % 4) * 0.02; // More variation
          const finalOpacity = baseOpacity + opacityVariation;

          // Apply persona-specific color tinting with more prominent colors
          const colorIndex = index % 3;
          let tintColor = colors.primary;
          if (colorIndex === 1) tintColor = colors.secondary;
          if (colorIndex === 2) tintColor = colors.accent;

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
                filter: "brightness(1.2) contrast(1.4) blur(0.2px)",
                transition:
                  "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                willChange: "transform",
                pointerEvents: "none",
                backgroundColor: tintColor,
                borderRadius: "50%",
                mixBlendMode: "screen",
                boxShadow: `0 0 20px ${tintColor}`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
