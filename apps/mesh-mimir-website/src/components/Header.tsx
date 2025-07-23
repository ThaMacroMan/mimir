import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 min-h-[64px] w-full bg-surface/95 backdrop-blur-sm border-b border-border flex items-center px-4 select-none z-50">
      {/* Far left: three-dot menu and logo */}
      <div className="flex items-center gap-4 min-w-[200px]">
        {/* Mnemos logo */}
        <Link href="/" className="flex items-center font-montserrat uppercase">
          <Image
            src="/mnemos-white-logo.png"
            alt="Mnemos Logo"
            height={36}
            width={140}
            priority
            className="h-9 w-auto"
          />
        </Link>
      </div>
      {/* Center: search bar */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 rounded-lg bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
        />
      </div>
      {/* Far right: community icons */}
      <div className="flex items-center gap-4 min-w-[160px] justify-end">
        <Link
          href="https://discord.gg/meshjs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <svg
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-primary hover:text-secondary transition"
          >
            <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.3a.117.117 0 0 0-.124.06c-.537.96-1.13 2.217-1.553 3.2a18.524 18.524 0 0 0-5.59 0c-.424-.987-1.017-2.24-1.554-3.2a.117.117 0 0 0-.124-.06A19.736 19.736 0 0 0 3.684 4.369a.105.105 0 0 0-.047.043C.533 9.045-.32 13.579.099 18.057a.121.121 0 0 0 .045.083c2.052 1.507 4.042 2.422 5.992 3.029a.116.116 0 0 0 .127-.043c.462-.63.873-1.295 1.226-1.994a.112.112 0 0 0-.065-.158c-.652-.247-1.27-.549-1.872-.892a.117.117 0 0 1-.012-.194c.126-.094.252-.192.371-.291a.112.112 0 0 1 .114-.01c3.927 1.793 8.18 1.793 12.061 0a.112.112 0 0 1 .115.009c.12.099.245.198.372.292a.117.117 0 0 1-.011.194 12.298 12.298 0 0 1-1.873.891.112.112 0 0 0-.064.159c.36.698.772 1.362 1.225 1.993a.115.115 0 0 0 .127.044c1.95-.607 3.94-1.522 5.993-3.029a.115.115 0 0 0 .045-.083c.5-5.177-.838-9.673-3.573-13.645a.093.093 0 0 0-.047-.043ZM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.955 2.419-2.156 2.419Zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419Z" />
          </svg>
        </Link>
        <Link
          href="https://twitter.com/mesh_js"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <svg
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-primary hover:text-secondary transition"
          >
            <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.488 0-4.507 2.02-4.507 4.507 0 .353.04.697.116 1.025C7.728 9.37 4.1 7.6 1.67 4.905a4.48 4.48 0 0 0-.61 2.267c0 1.563.796 2.942 2.008 3.75a4.48 4.48 0 0 1-2.042-.564v.057c0 2.183 1.553 4.004 3.617 4.42a4.48 4.48 0 0 1-2.037.077c.574 1.792 2.24 3.096 4.215 3.13A8.98 8.98 0 0 1 2 19.54a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.785-6.84 12.785-12.785 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698Z" />
          </svg>
        </Link>
        <Link
          href="https://github.com/MeshJS/mesh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-primary hover:text-secondary transition"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2Z" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
