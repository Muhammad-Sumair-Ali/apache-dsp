"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Database,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Users,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Activity,
  Layers,
  GitBranch,
  Play,
  Download,
  Settings,
  X,
  PlayCircle,
  BarChart,
  LineChart,
  PieChart,
} from "lucide-react";
import Image from "next/image";

const PlatformOverview = () => {
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Video Dialog */}

      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Turn Data Mess
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    to Data Products
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 max-w-xl">
                  Build reliable data pipelines and create data products that
                  drive business value. Transform your organization with our
                  unified data platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Start Building <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVideoDialogOpen(true)}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">+5X</div>
                  <div className="text-sm text-gray-600">faster to deploy</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">25%</div>
                  <div className="text-sm text-gray-600">cost of ownership</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">70%</div>
                  <div className="text-sm text-gray-600">
                    engineering time saved
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Data Flow */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        color: "bg-blue-500",
                        width: "w-20",
                        label: "Raw Data",
                      },
                      {
                        color: "bg-purple-500",
                        width: "w-16",
                        label: "Processing",
                      },
                      {
                        color: "bg-green-500",
                        width: "w-24",
                        label: "Analytics",
                      },
                      {
                        color: "bg-orange-500",
                        width: "w-18",
                        label: "Insights",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`${item.width} h-3 ${item.color} rounded-full`}
                        ></div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-3 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl transform -rotate-6 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Central Nervous System Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Data Platform
                  </h3>
                </div>

                {/* Connection Diagram */}
                <div className="space-y-6">
                  {[
                    {
                      label: "Data Sources",
                      icon: Database,
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      label: "Processing Engine",
                      icon: Settings,
                      color: "bg-purple-100 text-purple-600",
                    },
                    {
                      label: "Analytics Layer",
                      icon: BarChart3,
                      color: "bg-green-100 text-green-600",
                    },
                    {
                      label: "Data Products",
                      icon: Layers,
                      color: "bg-orange-100 text-orange-600",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div
                        className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: `${70 + index * 10}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                A Central Nervous System for your Entire Organization
              </h2>
              <p className="text-lg text-gray-600">
                Our platform serves as the backbone for all your data
                operations, connecting every part of your organization with
                reliable, real-time data flows that power intelligent decisions.
              </p>

              <div className="space-y-4">
                {[
                  "Unified data ingestion from all sources",
                  "Real-time processing and transformation",
                  "Automated quality checks and monitoring",
                  "Self-service analytics and insights",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {"DataFlow is a company-builder with the disruptive strategy"}
                </h4>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Chief Data Officer, Fortune 500 Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              All the Controls You Need to Set Data in Motion, in One Platform
            </h2>
            <p className="text-lg text-gray-600">
              Complete control over your data lifecycle with enterprise-grade
              security, governance, and scalability built right in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: "Stream", icon: Play, desc: "Real-time data streaming" },
              {
                title: "Connect",
                icon: GitBranch,
                desc: "Universal data connectors",
              },
              {
                title: "Process",
                icon: Settings,
                desc: "Advanced transformations",
              },
              {
                title: "Govern",
                icon: Shield,
                desc: "Data governance & security",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Platform Diagram */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 border">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-10 h-10 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Data Sources</h4>
                <p className="text-sm text-gray-600 mt-1">
                  APIs, Databases, Files
                </p>
              </div>

              <ArrowRight className="w-8 h-8 text-gray-400 hidden lg:block" />

              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Activity className="w-12 h-12 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  DataFlow Platform
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Stream • Transform • Govern
                </p>
              </div>

              <ArrowRight className="w-8 h-8 text-gray-400 hidden lg:block" />

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Data Products</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Analytics, ML, Apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Data Products Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Build Universal Data Products with Data Streaming
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Create scalable, reusable data products that serve multiple use
              cases across your organization. From real-time analytics to
              machine learning pipelines.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Streaming Architecture */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Streaming Architecture
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Data Ingestion
                    </span>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center space-x-4 mb-3">
                      <Activity className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">
                        Real-time Processing
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>• Stream Processing</div>
                      <div>• Data Validation</div>
                      <div>• Transformation</div>
                      <div>• Enrichment</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Output Streams
                    </span>
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-4 h-4 bg-green-500 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Real-time",
                  desc: "Process data as it arrives",
                },
                {
                  icon: Shield,
                  title: "Reliable",
                  desc: "Built-in fault tolerance",
                },
                {
                  icon: TrendingUp,
                  title: "Scalable",
                  desc: "Handle any data volume",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      {isVideoDialogOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                Why Instacart Chose Confluent for Data Streaming
              </h3>
              <button
                onClick={() => setIsVideoDialogOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/H2k-oYmu_HE"
                title="Why Instacart Chose Confluent for Data Streaming | Customer Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Video Section with Instacart-style Hero */}
      <section className="px-6 py-16 bg-gradient-to-r from-indigo-600 via-blue-500 to-fuchsia-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Success in Data Products
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Invested in Data Products.
                <br />
                <span className="text-blue-200">
                  Nearly 10 Years of Growth in Six Weeks
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-xl">
                See how leading companies transform their data operations and
                achieve unprecedented growth with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsVideoDialogOpen(true)}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center shadow-lg"
                >
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Watch Success Story
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                className="relative group cursor-pointer"
                onClick={() => setIsVideoDialogOpen(true)}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-2xl overflow-hidden relative border border-white/20">
                    {/* Background Image */}
                    <Image
                      height={300}
                      width={300}
                      alt="Instacart Partnership"
                      className="absolute inset-0 w-full h-full object-cover"
                      src="https://www.instacart.com/company/wp-content/uploads/2024/05/instacart_uber_partnership_press_image_720-1.png"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                        <Play className="w-8 h-8 text-indigo-600 ml-1" />
                      </div>
                    </div>

                   
                  </div>

                  <div className="mt-6 text-center">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Platform Demo
                    </h4>
                    <p className="text-blue-100">See DataFlow in action</p>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        300%
                      </div>
                      <div className="text-sm text-gray-600">Growth</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        6 Weeks
                      </div>
                      <div className="text-sm text-gray-600">Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <BarChart className="w-4 h-4 mr-2" />
              Insights
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Insights For Some More Knowledge
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our latest insights, case studies, and best practices to
              help you make the most of your data platform investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BarChart,
                title: "Asset + Data Streaming",
                description:
                  "Learn how to build robust data pipelines that scale with your business needs and deliver real-time insights.",
                color: "bg-blue-500",
                accent: "text-blue-600",
              },
              {
                icon: LineChart,
                title: "A Machine Online Data Platforms",
                description:
                  "Discover the architecture patterns and best practices for building modern data platforms.",
                color: "bg-purple-500",
                accent: "text-purple-600",
              },
              {
                icon: PieChart,
                title: "Forecasting and Governance",
                description:
                  "Master data governance frameworks and predictive analytics to drive better business outcomes.",
                color: "bg-green-500",
                accent: "text-green-600",
              },
              {
                icon: TrendingUp,
                title: "Apps Are Here",
                description:
                  "Explore the latest application trends and how they're transforming data consumption patterns.",
                color: "bg-orange-500",
                accent: "text-orange-600",
              },
            ].map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${insight.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <insight.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {insight.description}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    className={`${insight.accent} font-medium text-sm hover:underline flex items-center`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <Download className="w-4 h-4 text-gray-600" />
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>5 min read</span>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span>Technical</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center">
              View All Insights
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Expand Your Streaming Dataverse
              </h2>
              <p className="text-lg text-gray-600">
                Connect every data source, application, and system in your
                organization. Create a unified data ecosystem that scales with
                your business needs.
              </p>

              <div className="space-y-4">
                {[
                  "Connect 200+ data sources instantly",
                  "Real-time synchronization across systems",
                  "Enterprise-grade security and compliance",
                  "Visual data lineage and impact analysis",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg transition-shadow">
                Start Free Trial
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      name: "CRM Systems",
                      icon: Users,
                      color: "bg-blue-100 text-blue-600",
                    },
                    {
                      name: "Analytics Tools",
                      icon: BarChart3,
                      color: "bg-green-100 text-green-600",
                    },
                    {
                      name: "Cloud Storage",
                      icon: Database,
                      color: "bg-purple-100 text-purple-600",
                    },
                    {
                      name: "ML Platforms",
                      icon: Zap,
                      color: "bg-orange-100 text-orange-600",
                    },
                  ].map((system, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div
                        className={`w-12 h-12 ${system.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
                      >
                        <system.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-medium text-gray-900 text-sm">
                        {system.name}
                      </h4>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Connected Ecosystem
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient
                      id="connectionGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop
                        offset="100%"
                        stopColor="#8B5CF6"
                        stopOpacity="0.3"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100,80 Q200,150 300,80"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M100,220 Q200,150 300,220"
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already building with DataFlow. Start
            your free trial today and see the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>

          <div className="mt-8 text-blue-100 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformOverview;
