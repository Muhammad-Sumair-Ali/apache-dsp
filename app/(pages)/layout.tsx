
import Footer from "@/components/common/footer";
import Navigation from "@/components/common/navigation";
import TopNavbar from "@/components/common/Top-Navbar";
import React from "react";

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <TopNavbar />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
