"use client";

import Link from "next/link";
import { ThemeToggle } from "./global";
import { useState } from "react";

export default function TopNav() {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="h-16 border-b border-seance/20 bg-background/80 backdrop-blur-sm px-4 sm:px-6 sticky top-0 z-30">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-medium text-foreground hidden sm:block">
            Dashboard
          </h1>
          <div className="relative w-64 hidden md:block">
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
        </div>

        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full bg-seance/10 hover:bg-seance/20 transition-colors relative"
            aria-label="Notifications"
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
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-purpleHeart"></span>
          </button>

          <ThemeToggle />

          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-seance/10 transition-colors"
            >
              <div className="bg-purpleHeart/20 text-purpleHeart h-8 w-8 rounded-full flex items-center justify-center font-medium">
                VT
              </div>
              <span className="text-foreground text-sm font-medium hidden md:block">
                Victor Tekcify
              </span>
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
                className="text-foreground/70 hidden md:block"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-background border border-seance/20 rounded-md shadow-lg py-1 z-50">
                <Link
                  href="/account/profile"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-seance/10"
                  onClick={() => setShowUserMenu(false)}
                >
                  Your Profile
                </Link>
                <Link
                  href="/account/settings"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-seance/10"
                  onClick={() => setShowUserMenu(false)}
                >
                  Settings
                </Link>
                <hr className="my-1 border-seance/20" />
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-seance/10"
                  onClick={() => setShowUserMenu(false)}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
