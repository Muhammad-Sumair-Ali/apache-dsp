
import SidebarProvider from "@/context/SidebarProvider";
import AdminLayoutContent from "../../components/layouts/AdminLayoutContent";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SidebarProvider>
  );
}