"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  ArrowRight,
  Database,
  CheckCircle,
  Play,
  Layers,
  Shield,
  Users,
  Zap,
  BarChart3,
  Cloud,
  GitBranch,
  X,
  ExternalLink,
  Star,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function TableFlowPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
                <Badge className="bg-green-600/20 text-green-300 border-green-600/30 px-4 py-2">
                  Zero-ETL Table Management
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Easily represent{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Kafka topics
                  </span>{" "}
                  as Apache Iceberg® or Delta Lake tables
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your streaming data into queryable table formats
                  without complex ETL pipelines. Bridge the gap between
                  real-time streams and analytical workloads with zero
                  operational overhead.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Zero-ETL data transformation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Native Iceberg & Delta Lake support
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Automatic schema evolution
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </Button>
                  </DialogTrigger>
                  <DialogTitle className="sr-only">TableFlow Demo</DialogTitle>
                  <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                    <div className="relative bg-black rounded-lg overflow-hidden">
                      <button
                        onClick={() => setIsVideoOpen(false)}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <X className="w-6 h-6 text-white" />
                      </button>
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                       src="https://www.youtube.com/embed/k6mn2Sb1Uh4"
                          title="TableFlow Demo"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Embedded Video Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 shadow-2xl">
                <div className="bg-slate-900/90 rounded-2xl overflow-hidden border border-white/10">
                  {/* Video Header */}
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400">TableFlow Demo</div>
                  </div>

                  {/* Embedded Video */}
                  <div
                    className="aspect-video relative group cursor-pointer"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="TableFlow Introduction"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2">
                      TableFlow: Kafka to Tables Made Simple
                    </h3>
                    <p className="text-gray-400 text-sm">
                      See how TableFlow transforms Kafka topics into queryable
                      table formats in minutes, not months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics to Tables Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Topics to tables with{" "}
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    less effort and cost
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Eliminate the complexity of maintaining separate ETL
                  pipelines. Our intelligent mapping engine automatically
                  converts Kafka topics into optimized table formats while
                  preserving data lineage and ensuring consistency.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Instant Transformation
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Convert streaming topics to tables in real-time without
                    complex ETL processes or data movement.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Cost Optimization
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Reduce infrastructure costs by up to 60% compared to
                    traditional ETL solutions.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <GitBranch className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Schema Evolution
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Automatic schema detection and evolution ensures your tables
                    stay in sync with changing data.
                  </p>
                </div>
              </div>
            </div>

            {/* Transformation Visualization */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-6">
                    Data Transformation Pipeline
                  </h3>

                  {/* Pipeline Flow */}
                  <div className="space-y-8">
                    {/* Kafka Topics */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-white font-medium mb-2">
                        Kafka Topics
                      </h4>
                      <div className="flex justify-center space-x-2">
                        <Badge className="bg-orange-600/20 text-orange-300 text-xs">
                          user-events
                        </Badge>
                        <Badge className="bg-red-600/20 text-red-300 text-xs">
                          orders
                        </Badge>
                        <Badge className="bg-pink-600/20 text-pink-300 text-xs">
                          analytics
                        </Badge>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center">
                        <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                        <span className="text-xs text-gray-400 mt-2">
                          Zero-ETL
                        </span>
                      </div>
                    </div>

                    {/* Table Formats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Layers className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-medium text-sm mb-1">
                          Apache Iceberg®
                        </h4>
                        <p className="text-xs text-gray-400">
                          ACID transactions
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-medium text-sm mb-1">
                          Delta Lake
                        </h4>
                        <p className="text-xs text-gray-400">Time travel</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">
                        {"<1min"}
                      </div>
                      <div className="text-xs text-gray-400">Setup Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">60%</div>
                      <div className="text-xs text-gray-400">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">0</div>
                      <div className="text-xs text-gray-400">Data Loss</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Flexibility Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Storage Illustration */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="bg-slate-900/90 rounded-2xl p-8 border border-white/10">
                  <div className="text-center space-y-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                      <Cloud className="w-12 h-12 text-white" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">
                        Bring Your Own Storage
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Use your existing cloud storage infrastructure without
                        vendor lock-in
                      </p>
                    </div>

                    {/* Storage Options */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                        <div className="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Database className="w-4 h-4 text-orange-400" />
                        </div>
                        <div className="text-sm text-white font-medium">S3</div>
                        <div className="text-xs text-gray-400">Amazon S3</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                        <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Cloud className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="text-sm text-white font-medium">
                          GCS
                        </div>
                        <div className="text-xs text-gray-400">
                          Google Cloud
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                        <div className="w-8 h-8 bg-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Shield className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="text-sm text-white font-medium">
                          Azure
                        </div>
                        <div className="text-xs text-gray-400">
                          Blob Storage
                        </div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                        <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Database className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="text-sm text-white font-medium">
                          HDFS
                        </div>
                        <div className="text-xs text-gray-400">On-premises</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Enhanced flexibility by{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    bringing your own storage
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Maintain full control over your data with support for any
                  cloud storage provider. TableFlow works with your existing
                  infrastructure, ensuring compliance and cost optimization.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      No Vendor Lock-in
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Your data stays in your infrastructure with full portability
                    and control over access policies.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Cloud className="w-4 h-4 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Multi-Cloud Support
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Deploy across AWS, GCP, Azure, or on-premises with
                    consistent performance and features.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Cost Optimization
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Leverage existing storage contracts and optimize costs with
                    intelligent data tiering.
                  </p>
                </div>
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Explore Storage Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="bg-slate-900/90 rounded-2xl p-8 border border-white/10">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Video Thumbnail */}
                    <div className="lg:col-span-1">
                      <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                        <Image
                          width={300}
                          height={300}
                          src="/placeholder.svg?height=300&width=300"
                          alt="Customer Testimonial"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                                <Play className="w-8 h-8 text-white ml-1" />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                              <div className="relative bg-black rounded-lg overflow-hidden">
                                <div className="aspect-video">
                                  <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                    title="Customer Testimonial"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                  ></iframe>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center space-x-2">
                            <div className="text-2xl font-bold text-white">
                              TableFlow
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                          {
                            "Materializing Apache Kafka® Topics as Apache Iceberg® and Delta Lake Tables With Zero ETL"
                          }
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          TableFlow has revolutionized how we handle streaming
                          data. What used to take weeks of ETL development now
                          happens automatically. Our data engineers can focus on
                          building insights instead of maintaining pipelines.
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="space-y-1">
                          <div className="text-white font-semibold">
                            Sarah Chen
                          </div>
                          <div className="text-gray-400 text-sm">
                            Senior Data Engineer, TechCorp
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                        <div className="text-center">
                          <div className="text-xl font-bold text-white">
                            90%
                          </div>
                          <div className="text-xs text-gray-400">
                            Time Saved
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-white">
                            50%
                          </div>
                          <div className="text-xs text-gray-400">
                            Cost Reduction
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-white">0</div>
                          <div className="text-xs text-gray-400">Downtime</div>
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

      {/* Partner Ecosystem Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Build gold standard tables with our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                partner ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Seamlessly integrate with leading data platforms and tools. Our
              extensive partner network ensures TableFlow works with your
              existing data stack.
            </p>
          </div>

          {/* Partner Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {[
              { name: "Snowflake", color: "from-blue-500 to-cyan-500" },
              { name: "Databricks", color: "from-red-500 to-orange-500" },
              { name: "BigQuery", color: "from-blue-500 to-green-500" },
              { name: "Redshift", color: "from-blue-600 to-purple-600" },
              { name: "Spark", color: "from-orange-500 to-red-500" },
              { name: "Trino", color: "from-purple-500 to-pink-500" },
              { name: "Presto", color: "from-blue-500 to-purple-500" },
              { name: "Athena", color: "from-orange-500 to-yellow-500" },
              { name: "Dremio", color: "from-blue-500 to-cyan-500" },
              { name: "Starburst", color: "from-purple-500 to-blue-500" },
              { name: "Tableau", color: "from-blue-500 to-orange-500" },
              { name: "Looker", color: "from-green-500 to-blue-500" },
            ].map((partner, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${partner.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-white">
                    {partner.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Integration Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Instant Connectivity
              </h3>
              <p className="text-gray-300">
                Pre-built connectors and APIs make integration with your
                existing tools effortless.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Enterprise Security
              </h3>
              <p className="text-gray-300">
                Maintain security and compliance standards across all integrated
                platforms.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Unified Experience
              </h3>
              <p className="text-gray-300">
                Single pane of glass for managing all your table formats and
                data pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-blue-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Ready to transform your{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  streaming data?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of data teams who eliminated ETL complexity with
                TableFlow. Start converting your Kafka topics to queryable
                tables in minutes.
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
                <ExternalLink className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </div>

            <div className="text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Zero-ETL setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Expert support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
