"use client";

import Link from "next/link";
import { ThemeToggle } from "./global";

interface MobileNavProps {
  toggleSidebar: () => void;
}

export default function MobileNav({ toggleSidebar }: MobileNavProps) {
  return (
    <div className="md:hidden w-full h-16 flex items-center justify-between px-4 border-b border-seance/20 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md text-foreground hover:bg-seance/10"
          aria-label="Toggle sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <Link href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-purpleHeart"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-bold text-foreground">Tekcify</span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full bg-seance/10 hover:bg-seance/20 transition-colors relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-purpleHeart"></span>
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
}
