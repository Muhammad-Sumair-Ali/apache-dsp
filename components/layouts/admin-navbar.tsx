"use client";
import React from 'react';
import { 
  Search, 
  Bell, 
  HelpCircle, 
  Menu, 
  MoreHorizontal,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useSidebar } from '@/context/useSidebar';

const AdminNavbar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <nav className="bg-slate-900 text-white shadow-lg border-b border-slate-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:bg-slate-800 p-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-semibold text-lg tracking-wide">CONFLUENT</h1>
                <p className="text-xs text-slate-400 -mt-1">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* Center Section - Search */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search anything..."
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-slate-800 p-2"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Learn Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 transition-colors"
            >
              Learn
            </Button>
            
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative text-white hover:bg-slate-800 p-2"
            >
              <Bell className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
              >
                3
              </Badge>
            </Button>
            
            {/* Help */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-slate-800 p-2"
            >
              <HelpCircle className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:bg-slate-800 p-2"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="hidden sm:block text-sm">Muhammad</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-white border border-gray-200 shadow-lg"
              >
                <div className="px-3 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Muhammad</p>
                  <p className="text-xs text-gray-500">muhammad@example.com</p>
                </div>
                <DropdownMenuItem className="text-gray-700 hover:bg-gray-50">
                  Profile Settings
                </DropdownMenuItem>
               
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 hover:bg-red-50">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* More Options */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-slate-800 p-2"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;