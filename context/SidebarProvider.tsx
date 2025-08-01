"use client"

import React, { useState } from "react";
import { SidebarContext } from "./useSidebar";

interface SidebarProviderProps {
  children: React.ReactNode;
}

export default function SidebarProvider({ children }: SidebarProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}