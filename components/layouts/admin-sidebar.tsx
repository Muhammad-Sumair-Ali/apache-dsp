"use client"

import type React from "react"
import { usePathname } from "next/navigation" // Added import
import {
  Home,
  Globe,
  Database,
  Activity,
  LinkIcon,
  MessageCircle,
  FileText,
  X,
  ChevronRight,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/context/useSidebar" // Assuming this context exists and works as intended

// Define types for navigation items
interface NavItemType {
  icon: React.ElementType
  label: string
  href: string
  badge?: string
}

const AdminSidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar()

  const mainNavItems: NavItemType[] = [
    { icon: Home, label: "Dashboard", href: "/admin" },
    { icon: Globe, label: "Environments", href: "/admin/environments", badge: "3" },
    { icon: Database, label: "Data Portal", href: "/admin/data-portal" },
    { icon: Activity, label: "Stream Processing", href: "/admin/stream-processing" },
    { icon: LinkIcon, label: "Cluster Links", href: "/admin/cluster-links" },
  ]

  const bottomNavItems: NavItemType[] = [
    { icon: MessageCircle, label: "Chat with us", href: "/support/chat" },
    { icon: FileText, label: "File Support Ticket", href: "/support/ticket" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ]

  const NavItem = ({ item, onClick = () => {} }: { item: NavItemType; onClick?: () => void }) => {
    const pathname = usePathname() // Get current pathname
    const isActive = pathname === item.href // Determine if the item is active

    return (
      <a
        href={item.href}
        onClick={onClick}
        className={`
          group flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
          ${
            isActive
              ? "bg-blue-50 text-blue-700 shadow-sm border-l-4 border-blue-700 ml-0 pl-3"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }
        `}
      >
        <div className="flex items-center space-x-3">
          <item.icon
            className={`h-5 w-5 transition-colors ${
              isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"
            }`}
          />
          <span className="truncate">{item.label}</span>
        </div>
        {item.badge && (
          <Badge
            variant={item.badge === "New" ? "default" : "secondary"}
            className={`text-xs ${
              item.badge === "New" ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-600"
            }`}
          >
            {item.badge}
          </Badge>
        )}
        {!item.badge &&
          !isActive && ( // Only show chevron if not active and no badge
            <ChevronRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
      </a>
    )
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:pt-16 lg:pb-4 bg-white border-r border-gray-200 shadow-sm">
        <div className="flex flex-col flex-1 min-h-0">
          {/* Main Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <div className="space-y-1">
              {mainNavItems.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </div>
          </nav>
          {/* Bottom Navigation */}
          <div className="px-4 py-4">
            <Separator className="mb-4" />
            <nav className="space-y-1">
              {bottomNavItems.map((item, index) => (
                <NavItem key={index} item={item} />
              ))}
            </nav>
          </div>
        </div>
      </aside>
      {/* Mobile Sidebar */}
      <aside
        className={`
        lg:hidden fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full pt-16">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-100">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col flex-1 min-h-0">
            {/* Main Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              <div className="space-y-1">
                {mainNavItems.map((item, index) => (
                  <NavItem key={index} item={item} onClick={() => setSidebarOpen(false)} />
                ))}
              </div>
            </nav>
            {/* Bottom Navigation */}
            <div className="px-4 py-4">
              <Separator className="mb-4" />
              <nav className="space-y-1">
                {bottomNavItems.map((item, index) => (
                  <NavItem key={index} item={item} onClick={() => setSidebarOpen(false)} />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </aside>
      {/* Spacer for desktop sidebar */}
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0" aria-hidden="true" />
    </>
  )
}

export default AdminSidebar
