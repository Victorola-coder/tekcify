"use client";

import { useState } from "react";
import TopNav from "@/app/components/topnav";
import Sidebar from "@/app/components/sidebar";
import MobileNav from "@/app/components/mobile-nav";

export default function UserboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar - hidden on mobile, shown on desktop */}
      <div className="hidden md:block z-40">
        <Sidebar
          collapsed={sidebarCollapsed}
          toggleCollapse={toggleSidebarCollapse}
        />
      </div>

      {/* Mobile sidebar - shown when toggled */}
      {showMobileSidebar && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={toggleMobileSidebar}
        >
          <div className="w-64 h-full" onClick={(e) => e.stopPropagation()}>
            <Sidebar collapsed={false} toggleCollapse={() => {}} />
          </div>
        </div>
      )}

      {/* Main content area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <MobileNav toggleSidebar={toggleMobileSidebar} />
        <TopNav />
        <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
