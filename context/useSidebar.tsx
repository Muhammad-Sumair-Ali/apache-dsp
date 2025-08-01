import { createContext, useContext } from "react";

export const SidebarContext = createContext<{
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
});

export const useSidebar = () => useContext(SidebarContext);
