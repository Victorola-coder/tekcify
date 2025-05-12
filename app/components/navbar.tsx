"use client";

import Link from "next/link";
import { ThemeToggle } from "./global";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-seance/20 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-6 w-1/3">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Tekcify</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/dashboard"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/account"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Account
            </Link>
            <Link
              href="/billing"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Billing
            </Link>
            <Link
              href="/support"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>

        {/* Centered search input */}
        <div className="relative w-full max-w-md mx-auto w-1/3">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground/50"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-1.5 bg-background border border-seance/20 rounded-md focus:outline-none focus:ring-1 focus:ring-purpleHeart focus:border-purpleHeart text-sm text-foreground"
          />
        </div>

        <div className="flex items-center gap-4 justify-end w-1/3">
          <ThemeToggle />
          <Link
            href="/notifications"
            className="p-2 rounded-full bg-seance/10 hover:bg-seance/20 transition-colors"
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
              className="text-foreground"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </Link>
          <button className="p-2 rounded-full bg-seance/10 hover:bg-seance/20 transition-colors">
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
              className="text-foreground"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
