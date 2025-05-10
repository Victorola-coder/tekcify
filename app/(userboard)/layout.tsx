"use client";

import { useState } from "react";
import Sidebar from "@/app/components/sidebar";
import MobileNav from "@/app/components/mobile-nav";

export default function UserboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - hidden on mobile, shown on desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar - shown when toggled */}
      {showMobileSidebar && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        >
          <div className="w-64 h-full" onClick={(e) => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <MobileNav toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto bg-background">{children}</main>
      </div>
    </div>
  );
}
