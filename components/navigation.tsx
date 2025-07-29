"use client"
import { useState } from "react";
import { ChevronDown, Menu, X, Search, User, Users, Building2, FileText, Code, Globe, BookOpen, Zap, Shield, Database, BarChart3, MessageSquare, Lightbulb, Video, GraduationCap, Headphones, Calculator, Activity, Server, Cloud, Table, GitBranch, Workflow, Network } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-800 text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold">CONFLUENT</span>
                </div>
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-6">
                {/* Why Confluent Dropdown */}
                <div className="relative group">
                  <button 
                    className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors"
                    onMouseEnter={() => setActiveDropdown('why')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    WHY CONFLUENT <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  {activeDropdown === 'why' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown('why')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-6">
                        <div className="space-y-4">
                          <Link href="/apache-kafka-vs-confluent">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                              <Database className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900">Apache Kafka vs Confluent</h3>
                                <p className="text-sm text-gray-600">Compare platforms and see the difference</p>
                              </div>
                            </div>
                          </Link>
                          <Link href="/for-practitioners">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                              <Users className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900">For Practitioners</h3>
                                <p className="text-sm text-gray-600">Discover the platform built for those who build</p>
                              </div>
                            </div>
                          </Link>
                          <Link href="/for-executives">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                              <Building2 className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900">For Executives</h3>
                                <p className="text-sm text-gray-600">Unlock the value of data across your business</p>
                              </div>
                            </div>
                          </Link>
                          <Link href="/our-customers">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                              <MessageSquare className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900">Our Customers</h3>
                                <p className="text-sm text-gray-600">Explore testimonials and case studies</p>
                              </div>
                            </div>
                          </Link>
                          <Link href="/our-partners">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                              <Globe className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900">Our Partners</h3>
                                <p className="text-sm text-gray-600">Find a partner or explore our programs</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Platform Dropdown */}
                <div className="relative group">
                  <button 
                    className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors"
                    onMouseEnter={() => setActiveDropdown('platform')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    PLATFORM <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  {activeDropdown === 'platform' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown('platform')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="grid grid-cols-3 gap-0">
                        {/* Left Column - Platform Features */}
                        <div className="p-6 border-r border-gray-100">
                          <div className="space-y-4">
                            <Link href="/platform-overview">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Network className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Platform Overview</h3>
                                </div>
                              </div>
                            </Link>
                            
                            <Link href="/data-streaming">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Workflow className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Data Streaming</h3>
                                  <p className="text-sm text-gray-600">Build real-time data architectures</p>
                                </div>
                              </div>
                            </Link>

                            <Link href="/connectors">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <GitBranch className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Connectors</h3>
                                  <p className="text-sm text-gray-600">Easily integrate your data ecosystem</p>
                                </div>
                              </div>
                            </Link>

                            <Link href="/stream-governance">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Stream Governance</h3>
                                  <p className="text-sm text-gray-600">Democratize access to high-quality data</p>
                                </div>
                              </div>
                            </Link>

                            <Link href="/stream-processing">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Activity className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Stream Processing</h3>
                                  <p className="text-sm text-gray-600">Transform, analyze, and act on real-time data</p>
                                </div>
                              </div>
                            </Link>

                            <Link href="/tableflow">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Table className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Tableflow</h3>
                                  <p className="text-sm text-gray-600">Topics to tables in a few clicks</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Middle Column - Deployment Options */}
                        <div className="p-6 border-r border-gray-100">
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">DEPLOYMENT OPTIONS</h4>
                          </div>
                          <div className="space-y-4">
                            <Link href="/confluent-cloud">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Cloud className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Confluent Cloud</h3>
                                  <p className="text-sm text-gray-600">Stream smarter with our fully managed, cloud-native Apache Kafka® service</p>
                                </div>
                              </div>
                            </Link>

                            <Link href="/confluent-platform">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Server className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Confluent Platform</h3>
                                  <p className="text-sm text-gray-600">Run and manage our complete data streaming platform on-premises</p>
                                </div>
                              </div>
                            </Link>

                            <Link href="/warpstream">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Zap className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">WarpStream</h3>
                                  <p className="text-sm text-gray-600">Deploy a Kafka-compatible data streaming platform in your private cloud</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Right Column - Demo Center */}
                        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                          <div className="relative">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 mb-4">
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Activity className="w-8 h-8 text-white" />
                              </div>
                            </div>
                            
                            <div className="text-center">
                              <h3 className="font-bold text-gray-900 mb-2">Demo Center</h3>
                              <p className="text-sm text-gray-600 mb-4">
                                Wherever you are in your data streaming journey, youll find the explainer videos and tutorials you need to advance your skills here.
                              </p>
                              <Link href="/demo-center">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
                                  Explore Now →
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing Dropdown */}
                <div className="relative group">
                  <button 
                    className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors"
                    onMouseEnter={() => setActiveDropdown('pricing')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    PRICING <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  {activeDropdown === 'pricing' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown('pricing')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-6">
                        <div className="space-y-4">
                          <Link href="/confluent-pricing">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                              <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900">Confluent Pricing</h3>
                                <p className="text-sm text-gray-600">View our pricing plans and features</p>
                              </div>
                            </div>
                          </Link>
                          <Link href="/cost-estimator">
                            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                              <Calculator className="w-6 h-6 text-blue-600 mt-1" />
                              <div>
                                <h3 className="font-semibold text-gray-900">Cost Estimator</h3>
                                <p className="text-sm text-gray-600">Calculate your estimated costs</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div className="relative group">
                  <button 
                    className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors"
                    onMouseEnter={() => setActiveDropdown('solutions')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    SOLUTIONS <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  {activeDropdown === 'solutions' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown('solutions')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                            <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                              <h3 className="font-semibold text-gray-900">Real-time Analytics</h3>
                              <p className="text-sm text-gray-600">Build streaming analytics applications</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                            <Shield className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                              <h3 className="font-semibold text-gray-900">Fraud Detection</h3>
                              <p className="text-sm text-gray-600">Detect threats in real-time</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                            <Database className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                              <h3 className="font-semibold text-gray-900">Data Integration</h3>
                              <p className="text-sm text-gray-600">Connect all your data sources</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                            <Users className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                              <h3 className="font-semibold text-gray-900">Customer 360</h3>
                              <p className="text-sm text-gray-600">Get a complete customer view</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Resources Dropdown */}
                <div className="relative group">
                  <button 
                    className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium flex items-center transition-colors"
                    onMouseEnter={() => setActiveDropdown('resources')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    RESOURCES <ChevronDown className="ml-1 h-3 w-3" />
                  </button>
                  {activeDropdown === 'resources' && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown('resources')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-8">
                          {/* General Resources */}
                          <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">GENERAL RESOURCES</h4>
                            <div className="space-y-1">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">All Resources</h3>
                                  <p className="text-sm text-gray-600">Browse whitepapers, ebooks, reports & more</p>
                                </div>
                              </div>
                              <Link href="/blog">
                                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                  <FileText className="w-6 h-6 text-blue-600 mt-1" />
                                  <div>
                                    <h3 className="font-semibold text-gray-900">Blog</h3>
                                    <p className="text-sm text-gray-600">Best practices, industry trends and news</p>
                                  </div>
                                </div>
                              </Link>
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Video className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Webinars</h3>
                                  <p className="text-sm text-gray-600">Browse on-demand or upcoming sessions</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">The Data Glossary</h3>
                                  <p className="text-sm text-gray-600">Get up to speed on data streaming concepts</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Professional Services</h3>
                                  <p className="text-sm text-gray-600">Expert guidance and support</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Headphones className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Contact Support</h3>
                                  <p className="text-sm text-gray-600">Get help from our support team</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Developer Resources */}
                          <div>
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">DEVELOPER RESOURCES</h4>
                            <div className="space-y-1">
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Code className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Confluent Developer</h3>
                                  <p className="text-sm text-gray-600">Courses, tutorials and language guides</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <FileText className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Documentation</h3>
                                  <p className="text-sm text-gray-600">Guides, tutorials, API and CLI references</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Training & Certification</h3>
                                  <p className="text-sm text-gray-600">Start learning for free from Confluent</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                <Users className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-semibold text-gray-900">Developer Meetups</h3>
                                  <p className="text-sm text-gray-600">Join a global community of developers</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/about" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  ABOUT
                </Link>
                <Link href="/contact" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white/90 hover:text-white p-2 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/login">
              <button className="text-white/90 hover:text-white p-2 transition-colors">
                <User className="h-5 w-5" />
              </button>
            </Link>
            <Link href="/get-started">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium px-6 py-2 rounded-full">
                Start For Free
              </Button>
            </Link>
            <button
              className="md:hidden text-white"
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
              <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium text-left">WHY CONFLUENT</button>
              <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium text-left">PLATFORM</button>
              <Link href="/pricing" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium">PRICING</Link>
              <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium text-left">SOLUTIONS</button>
              <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium text-left">RESOURCES</button>
              <Link href="/about" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium">ABOUT</Link>
              <Link href="/contact" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium">CONTACT</Link>
              <div className="border-t border-white/20 mt-4 pt-4">
                <Link href="/login" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium block">LOGIN</Link>
                <Link href="/register" className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium block">REGISTER</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
