"use client"

import React from "react";
import AdminNavbar from "@/components/layouts/admin-navbar";
import AdminSidebar from "@/components/layouts/admin-sidebar";
import { useSidebar } from "@/context/useSidebar";

interface AdminLayoutContentProps {
  children: React.ReactNode;
}

export default function AdminLayoutContent({ children }: AdminLayoutContentProps) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Fixed Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AdminNavbar />
      </div>

      {/* Main Layout Container */}
      <div className="flex pt-16"> 
        {/* Sidebar */}
        <div className="relative">
          <AdminSidebar />
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          {/* Content Container with proper padding */}
          <div className="h-full">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}