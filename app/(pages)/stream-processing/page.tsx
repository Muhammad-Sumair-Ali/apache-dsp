"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Database,
  CheckCircle,
  Play,
  Cpu,
  Shield,
  Users,
  Filter,
  GitMerge,
  Sparkles,
  BarChart3,
  Brain,
  Eye,
  Layers,
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Cloud,
} from "lucide-react";

export default function StreamProcessingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30 px-4 py-2">
                  Serverless Stream Processing
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Simple, Serverless{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Stream Processing
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Create both high-quality, reusable data streams with the
                  industry only serverless Apache Flink® service. Build
                  sophisticated stream processing applications without managing
                  infrastructure or worrying about scale.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Complete Flink® SQL compatibility
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Auto-scaling and serverless operations
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Built-in state management and fault tolerance
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
                >
                  Start Processing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </div>
            </div>

            {/* Processing Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 shadow-2xl">
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-white/10">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Stream Processing Console
                    </div>
                  </div>

                  {/* Processing Pipeline */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-white">
                        Active Processing Jobs
                      </h3>
                      <Badge className="bg-green-600/20 text-green-300">
                        3 Running
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium text-sm">
                            Real-time Analytics
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-400">
                              Running
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>Events/sec: 1.2M</span>
                          <span>Latency: 15ms</span>
                        </div>
                        <div className="mt-2 w-full bg-slate-700 rounded-full h-1">
                          <div
                            className="bg-blue-500 h-1 rounded-full"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium text-sm">
                            Fraud Detection
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-400">
                              Running
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>Events/sec: 850K</span>
                          <span>Latency: 8ms</span>
                        </div>
                        <div className="mt-2 w-full bg-slate-700 rounded-full h-1">
                          <div
                            className="bg-purple-500 h-1 rounded-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium text-sm">
                            User Personalization
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-400">
                              Running
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>Events/sec: 2.1M</span>
                          <span>Latency: 12ms</span>
                        </div>
                        <div className="mt-2 w-full bg-slate-700 rounded-full h-1">
                          <div
                            className="bg-green-500 h-1 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Use Case Visualization */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="relative h-96 flex items-center justify-center">
                  {/* Central Processing Hub */}
                  <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl z-10">
                    <Cpu className="w-12 h-12 text-white" />
                  </div>

                  {/* Surrounding Use Case Bubbles */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-8 h-8 text-white" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap">
                      Real-time Analytics
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap">
                      Fraud Detection
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap">
                      Personalization
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap">
                      Monitoring
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: 1 }}
                  >
                    <defs>
                      <linearGradient
                        id="useCase1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8B5CF6"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor="#EC4899"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                    </defs>
                    <line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="25%"
                      stroke="url(#useCase1)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;10"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line
                      x1="50%"
                      y1="50%"
                      x2="75%"
                      y2="50%"
                      stroke="url(#useCase1)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;10"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="75%"
                      stroke="url(#useCase1)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;10"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line
                      x1="50%"
                      y1="50%"
                      x2="25%"
                      y2="50%"
                      stroke="url(#useCase1)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;10"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </line>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Real-time Use Cases Need{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Real-time Processing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Modern applications demand instant insights and immediate
                  responses. Our stream processing platform enables you to build
                  sophisticated real-time applications that react to events as
                  they happen.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Real-time Analytics
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Process millions of events per second to generate instant
                    insights, dashboards, and alerts for business-critical
                    decisions.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Fraud Detection
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Identify suspicious patterns and anomalies in real-time to
                    prevent fraud before it impacts your business.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Personalization
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Deliver personalized experiences by processing user behavior
                    and preferences in real-time.
                  </p>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Use Cases
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Pipelines Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Accelerate{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real-Time AI Pipelines
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Build and deploy AI/ML workflows that process streaming data in
              real-time. From feature engineering to model inference, create
              intelligent applications that learn and adapt continuously.
            </p>
          </div>

          {/* AI Pipeline Workflow */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
              <div className="bg-slate-900/90 rounded-2xl p-8 border border-white/10">
                {/* Pipeline Steps */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                  {/* Data Ingestion */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      Data Ingestion
                    </h3>
                    <p className="text-xs text-gray-400">
                      Stream data from multiple sources
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
                    <ArrowDown className="w-6 h-6 text-gray-400 md:hidden" />
                  </div>

                  {/* Feature Engineering */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Layers className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      Feature Engineering
                    </h3>
                    <p className="text-xs text-gray-400">
                      Transform and enrich data
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
                    <ArrowDown className="w-6 h-6 text-gray-400 md:hidden" />
                  </div>

                  {/* ML Inference */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      ML Inference
                    </h3>
                    <p className="text-xs text-gray-400">
                      Real-time predictions
                    </p>
                  </div>
                </div>

                {/* Pipeline Features */}
                <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/10">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      ML-Ready Features
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">
                          Built-in feature stores
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">
                          Model versioning and deployment
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">
                          A/B testing framework
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">
                          Drift detection and monitoring
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white">
                          {"<10ms"}
                        </div>
                        <div className="text-xs text-gray-400">
                          Inference Latency
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white">1M+</div>
                        <div className="text-xs text-gray-400">
                          Predictions/sec
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white">
                          99.9%
                        </div>
                        <div className="text-xs text-gray-400">
                          Model Accuracy
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-white">24/7</div>
                        <div className="text-xs text-gray-400">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
            >
              Build AI Pipelines
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stream Operations Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Filter. Join. Enrich.
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Powerful stream processing operations that transform raw data into
              valuable insights. Build complex data pipelines with simple,
              intuitive operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stream Operations Visualization */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-6">
                    Stream Processing Pipeline
                  </h3>

                  {/* Data Flow Visualization */}
                  <div className="space-y-6">
                    {/* Input Streams */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-white">
                            User Events
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-white">
                            Product Catalog
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-white">
                            Order History
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center space-y-2">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400">Filter</span>
                      </div>

                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Filter className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Join Operation */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center space-x-4">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                          <GitMerge className="w-8 h-8 text-white" />
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>

                    {/* Enrich Operation */}
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex flex-col items-center space-y-2">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-gray-400">Enrich</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-white">
                            Personalized Recommendations
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-white">
                            Real-time Insights
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">2.4M</div>
                      <div className="text-xs text-gray-400">Events/sec</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">
                        {"<5ms"}
                      </div>
                      <div className="text-xs text-gray-400">Latency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">99.9%</div>
                      <div className="text-xs text-gray-400">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations Features */}
            <div className="space-y-8">
              <div className="grid gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                      <Filter className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Smart Filtering
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Apply complex filters and conditions to streaming data with
                    SQL-like syntax and real-time evaluation.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>• Complex predicates</span>
                    <span>• Pattern matching</span>
                    <span>• Time windows</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center">
                      <GitMerge className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Stream Joins
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Join multiple data streams in real-time with windowed joins,
                    temporal joins, and lookup joins.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>• Inner/Outer joins</span>
                    <span>• Time-based windows</span>
                    <span>• State management</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Data Enrichment
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Enhance streaming data with external lookups, computed
                    fields, and ML-powered insights.
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>• External lookups</span>
                    <span>• Computed fields</span>
                    <span>• ML predictions</span>
                  </div>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Start Building Pipelines
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900/20 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">
            Kafka + Flink, Unified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: BookOpen,
                title: "Enterprise-grade",
                desc: "Security, reliability, and compliance for mission-critical workloads.",
              },
              {
                icon: BarChart3,
                title: "Stream Governance",
                desc: "Manage, monitor, and secure your data streams intelligently.",
              },
              {
                icon: Eye,
                title: "Monitoring",
                desc: "Real-time visibility and alerting for your streaming pipelines.",
              },
              {
                icon: Cloud,
                title: "Connectors",
                desc: "Integrate with hundreds of sources and sinks out-of-the-box.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-xl p-8 shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
              >
                <feature.icon className="text-4xl text-blue-300 mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16  relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Ready to process streams at{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  lightning speed?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of developers building the next generation of
                real-time applications. Start processing your streams in
                minutes, not months.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold"
              >
                Schedule Demo
              </Button>
            </div>

            <div className="text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No infrastructure to manage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Pay per use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Enterprise support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
