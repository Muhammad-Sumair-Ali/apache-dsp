/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState } from "react"
import {
  ChevronDown,
  Menu,
  X,
  Search,
  User,
  Users,
  Building2,
  FileText,
  Code,
  Globe,
  BookOpen,
  Zap,
  Shield,
  Database,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Video,
  GraduationCap,
  Headphones,
  Calculator,
  Activity,
  Server,
  Cloud,
  Table,
  GitBranch,
  Workflow,
  Network,
  Landmark,
  Factory,
  Phone,
  ArrowRight,
  ShoppingCart,
  Banknote,
  Brain,
  Hexagon,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button" // Corrected import path for Button

// Dropdown data configuration
const dropdownData = {
  why: {
    width: "w-80",
    items: [
      {
        href: "/apache-kafka-vs-confluent",
        icon: Database,
        title: "Apache Kafka vs Confluent",
        description: "Compare platforms and see the difference",
      },
      {
        href: "/for-practitioners",
        icon: Users,
        title: "For Practitioners",
        description: "Discover the platform built for those who build",
      },
      {
        href: "/for-executives",
        icon: Building2,
        title: "For Executives",
        description: "Unlock the value of data across your business",
      },
      {
        href: "/our-customers",
        icon: MessageSquare,
        title: "Our Customers",
        description: "Explore testimonials and case studies",
      },
      {
        href: "/our-partners",
        icon: Globe,
        title: "Our Partners",
        description: "Find a partner or explore our programs",
      },
    ],
  },
  pricing: {
    width: "w-80",
    items: [
      {
        href: "/confluent-pricing",
        icon: BarChart3,
        title: "Confluent Pricing",
        description: "View our pricing plans and features",
      },
      {
        href: "/cost-estimator",
        icon: Calculator,
        title: "Cost Estimator",
        description: "Calculate your estimated costs",
      },
    ],
  },
  solutions: {
    width: "w-full", // This width will be overridden by the custom SolutionsDropdown
    sections: [
      {
        title: "USE CASES",
        items: [
          {
            href: "/shift-left-analytics",
            icon: GitBranch,
            title: "Shift Left Analytics",
            description: "Clean and govern data at the source and turn topics into Iceberg or Delta Lake tables",
          },
          {
            href: "/generative-ai",
            icon: Brain,
            title: "Generative AI",
            description: "Build RAG and agentic AI use cases with real-time, contextual and trustworthy data",
          },
          {
            href: "/microservices",
            icon: Hexagon,
            title: "Event-Driven Microservices",
            description: "Learn to build event-driven microservices applications with data streaming",
          },
          {
            href: "/use-case",
            icon: Building2,
            title: "Reference Architectures",
            description: "Discover best practices for common data streaming use cases",
          },
        ],
      },
      {
        title: "INDUSTRIES",
        items: [
          { href: "/industry-solutions/financial-services", icon: Banknote, title: "Financial Services" },
          { href: "/industry-solutions/retail-ecommerce", icon: ShoppingCart, title: "Retail & eCommerce" },
          { href: "/industry-solutions/manufacturing", icon: Factory, title: "Manufacturing & Automotive" },
          { href: "/industry-solutions/public-sector", icon: Landmark, title: "Public Sector" },
          { href: "/industry-solutions/telecommunications", icon: Phone, title: "Telecommunications" },
          { href: "/industry-solutions/all-solutions", icon: ArrowRight, title: "See All Solutions & Industries" },
        ],
      },
    ],
  },
}

// Platform dropdown component (special layout)
const PlatformDropdown = ({ isActive, onMouseEnter, onMouseLeave }: any) => {
  if (!isActive) return null
  return (
    <div
      className="absolute top-full left-0 mt-1 w-[750px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-3 gap-0">
        {/* Platform Features */}
        <div className="p-6 border-r border-gray-100">
          <div className="space-y-4">
            {[
              { href: "/platform-overview", icon: Network, title: "Platform Overview" },
              {
                href: "/data-streaming",
                icon: Workflow,
                title: "Data Streaming",
                description: "Build real-time data architectures",
              },
              {
                href: "/connectors",
                icon: GitBranch,
                title: "Connectors",
                description: "Easily integrate your data ecosystem",
              },
              {
                href: "/stream-governance",
                icon: Shield,
                title: "Stream Governance",
                description: "Democratize access to high-quality data",
              },
              { href: "/stream-processing", icon: Activity, title: "Transform, analyze, and act on real-time data" },
              { href: "/tableflow", icon: Table, title: "Tableflow", description: "Topics to tables in a few clicks" },
            ].map((item) => (
              <DropdownItem key={item.title} {...item} />
            ))}
          </div>
        </div>
        {/* Deployment Options */}
        <div className="p-6 border-r border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">DEPLOYMENT OPTIONS</h4>
          <div className="space-y-4">
            {[
              {
                href: "/confluent-cloud",
                icon: Cloud,
                title: "Confluent Cloud",
                description: "Stream smarter with our fully managed, cloud-native Apache Kafka® service",
              },
              {
                href: "/confluent-platform",
                icon: Server,
                title: "Confluent Platform",
                description: "Run and manage our complete data streaming platform on-premises",
              },
              {
                href: "https://www.warpstream.com/bring-your-own-cloud-kafka-data-streaming",
                icon: Zap,
                title: "WarpStream",
                description: "Deploy a Kafka-compatible data streaming platform in your private cloud",
                external: true,
              },
            ].map((item) => (
              <DropdownItem key={item.title} {...item} />
            ))}
          </div>
        </div>
        {/* Demo Center */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Demo Center</h3>
            <p className="text-sm text-gray-600 mb-4">
              Wherever you are in your data streaming journey, you all find the explainer videos and tutorials you need
              to advance your skills here.
            </p>
            <Link href="/demo-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                Explore Now →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Resources dropdown component (special layout)
const ResourcesDropdown = ({ isActive, onMouseEnter, onMouseLeave }: any) => {
  if (!isActive) return null
  const generalResources = [
    {
      icon: BookOpen,
      title: "All Resources",
      description: "Browse whitepapers, ebooks, reports & more",
      href: "/resources",
    },
    { icon: FileText, title: "Blog", description: "Best practices, industry trends and news", href: "/blog" },
    { icon: Video, title: "Webinars", description: "Browse on-demand or upcoming sessions", href: "/webinars" },
    {
      icon: Lightbulb,
      title: "The Data Glossary",
      description: "Get up to speed on data streaming concepts",
      href: "/glossary",
    },
    { icon: Shield, title: "Professional Services", description: "Expert guidance and support", href: "/services" },
    { icon: Headphones, title: "Contact Support", description: "Get help from our support team", href: "https://support.confluent.io/?_gl=1*1q5b2yo*_gcl_au*MjAyNDEyNDI1My4xNzUzNzk4NTU4*_ga*MTYxODE0MDMwNC4xNzUzNzk4NTU5*_ga_D2D3EGKSGD*czE3NTM5NDk1NzYkbzE0JGcxJHQxNzUzOTUzNTIwJGo1OSRsMCRoMA..&_ga=2.94638428.1597049125.1753798559-1618140304.1753798559" },
  ]
  const developerResources = [
    {
      icon: Code,
      title: "Confluent Developer",
      description: "Courses, tutorials and language guides",
      href: "https://developer.confluent.io/?_gl=1*ug79g0*_gcl_au*MjAyNDEyNDI1My4xNzUzNzk4NTU4*_ga*MTYxODE0MDMwNC4xNzUzNzk4NTU5*_ga_D2D3EGKSGD*czE3NTM5NDk1NzYkbzE0JGcxJHQxNzUzOTUzNTIwJGo1OSRsMCRoMA..&_ga=2.90446298.1597049125.1753798559-1618140304.1753798559",
    },
    { icon: FileText, title: "Documentation", description: "Guides, tutorials, API and CLI references", href: "https://docs.confluent.io/?_gl=1*4ze00b*_gcl_au*MjAyNDEyNDI1My4xNzUzNzk4NTU4*_ga*MTYxODE0MDMwNC4xNzUzNzk4NTU5*_ga_D2D3EGKSGD*czE3NTM5NDk1NzYkbzE0JGcxJHQxNzUzOTUzOTc2JGo2MCRsMCRoMA..&_ga=2.90446298.1597049125.1753798559-1618140304.1753798559" },
    {
      icon: GraduationCap,
      title: "Training & Certification",
      description: "Start learning for free from Confluent",
      href: "/training",
    },
    { icon: Users, title: "Developer Meetups", description: "Join a global community of developers", href: "https://developer.confluent.io/meetups/" },
  ]
  return (
    <div
      className="absolute top-full left-0 mt-1 w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">GENERAL RESOURCES</h4>
            <div className="space-y-1">
              {generalResources.map((item) => (
                <DropdownItem key={item.title} {...item} />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">DEVELOPER RESOURCES</h4>
            <div className="space-y-1">
              {developerResources.map((item) => (
                <DropdownItem key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// NEW: Solutions dropdown component (special layout)
const SolutionsDropdown = ({ isActive, onMouseEnter, onMouseLeave }: any) => {
  if (!isActive) return null
  const { sections } = dropdownData.solutions

  const useCases = sections.find((s: any) => s.title === "USE CASES")?.items || []
  const industries = sections.find((s: any) => s.title === "INDUSTRIES")?.items || []

  return (
    <div
      className="absolute top-full left-0 mt-1 w-[750px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-3 gap-0">
        {/* Use Cases */}
        <div className="p-6 border-r border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">USE CASES</h4>
          <div className="space-y-1">
            {useCases.map((item: any) => (
              <DropdownItem key={item.title} {...item} />
            ))}
          </div>
        </div>
        {/* Industries */}
        <div className="p-6 border-r border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">INDUSTRIES</h4>
          <div className="space-y-1">
            {industries.map((item: any) => (
              <DropdownItem key={item.title} {...item} />
            ))}
          </div>
        </div>
        {/* Promotional/CTA Section */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Explore Solutions</h3>
            <p className="text-sm text-gray-600 mb-4">
              Discover how Confluent helps organizations across various industries solve their real-time data
              challenges.
            </p>
            <Link href="/all-solutions">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                View All Solutions →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Reusable dropdown item component
interface DropdownItemProps {
  href: string
  icon: React.ElementType
  title: string
  description?: string
  external?: boolean
}
const DropdownItem = ({ href, icon: Icon, title, description, external = false }: DropdownItemProps) => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group w-full"
  >
    <Icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
    <div className="flex-1">
      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      {description && <p className="text-sm text-gray-600 mt-0.5">{description}</p>}
    </div>
  </Link>
)

// Standard dropdown component with explicit types
interface StandardDropdownProps {
  data: any
  isActive: boolean
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>
}
const StandardDropdown = ({ data, isActive, onMouseEnter, onMouseLeave }: StandardDropdownProps) => {
  if (!isActive || !data) return null
  return (
    <div
      className={`absolute top-full left-0 mt-1 ${data.width} bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-6">
        {data.sections ? (
          // Multi-section dropdown (like Solutions, but now only for other potential multi-section dropdowns)
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.sections.map((section: any) => (
              <div key={section.title}>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">{section.title}</h4>
                <div className="flex flex-col gap-2">
                  {section.items.map((item: any) => (
                    <DropdownItem key={item.title} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Single section dropdown
          <div className="flex flex-col gap-2">
            {data.items.map((item: any) => (
              <DropdownItem key={item.title} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Main navigation component
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const handleDropdownEnter = (dropdownName: any) => {
    setActiveDropdown(dropdownName)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const navItems = [
    { name: "WHY CONFLUENT", key: "why", hasDropdown: true },
    { name: "PLATFORM", key: "platform", hasDropdown: true },
    { name: "PRICING", key: "pricing", hasDropdown: true },
    { name: "SOLUTIONS", key: "solutions", hasDropdown: true },
    { name: "RESOURCES", key: "resources", hasDropdown: true },
    { name: "ABOUT", key: "about", href: "/about" },
    { name: "CONTACT", key: "contact", href: "/contact" },
  ]

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-800 text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center space-x-2 cursor-pointer group">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold tracking-tight">CONFLUENT</span>
                </div>
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <div key={item.key} className="relative group">
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors"
                          onMouseEnter={() => handleDropdownEnter(item.key)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          {item.name}
                          <ChevronDown
                            className={`ml-1 h-3 w-3 transition-transform ${
                              activeDropdown === item.key ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Render appropriate dropdown */}
                        {item.key === "platform" && (
                          <PlatformDropdown
                            isActive={activeDropdown === "platform"}
                            onMouseEnter={() => handleDropdownEnter("platform")}
                            onMouseLeave={handleDropdownLeave}
                          />
                        )}

                        {item.key === "resources" && (
                          <ResourcesDropdown
                            isActive={activeDropdown === "resources"}
                            onMouseEnter={() => handleDropdownEnter("resources")}
                            onMouseLeave={handleDropdownLeave}
                          />
                        )}

                        {/* NEW: Use SolutionsDropdown for 'solutions' key */}
                        {item.key === "solutions" && (
                          <SolutionsDropdown
                            isActive={activeDropdown === "solutions"}
                            onMouseEnter={() => handleDropdownEnter("solutions")}
                            onMouseLeave={handleDropdownLeave}
                          />
                        )}

                        {(item.key === "why" || item.key === "pricing") && ( // 'solutions' removed from here
                          <StandardDropdown
                            data={dropdownData[item.key as "why" | "pricing"]}
                            isActive={activeDropdown === item.key}
                            onMouseEnter={() => handleDropdownEnter(item.key)}
                            onMouseLeave={handleDropdownLeave}
                          />
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href ?? `/${item.key.toLowerCase().replace(" ", "-")}`}
                        className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="text-white/90 hover:text-white p-2 transition-colors rounded-full hover:bg-white/10">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/login">
              <button className="text-white/90 hover:text-white p-2 transition-colors rounded-full hover:bg-white/10">
                <User className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/get-started">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium px-6 py-2 rounded-full transition-all hover:scale-105 shadow-lg">
                Start For Free
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href || `/${item.key.toLowerCase().replace(" ", "-")}`}
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-white/20 mt-4 pt-4 space-y-2">
                <Link
                  href="/login"
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium block hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LOGIN
                </Link>
                <Link
                  href="/register"
                  className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium block hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  REGISTER
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
