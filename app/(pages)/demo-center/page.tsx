"use client";
import React, { useState } from "react";
import {
  Play,
  Users,
  Database,
  Zap,
  ArrowRight,
  ExternalLink,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

const ConfluentDemoCenter = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const kafkaTopics = [
    {
      title: "Serialization and Consumer Java Client",
      description:
        "Learn the fundamentals of Kafka serialization and Java consumer implementation",
      duration: "18 min",
      level: "Intermediate",
    },
    {
      title: "Apache Kafka Fundamentals",
      description:
        "Deep dive into core Kafka concepts, architecture, and best practices",
      duration: "25 min",
      level: "Beginner",
    },
    {
      title: "Stream Processing with ksqlDB",
      description:
        "Build real-time stream processing applications using ksqlDB",
      duration: "22 min",
      level: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">
                  Demo Center
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Confluent Demo Center
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Explore hands-on demos and tutorials to master data streaming
                  with Confluent Cloud. Learn through interactive examples and
                  real-world use cases.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white bg-blue-600/40 hover:bg-white/10 text-lg px-8 py-3"
                >
                  View All Demos
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>50+ Interactive Demos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Self-paced Learning</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                  <DialogTrigger asChild>
                    <div className="aspect-video relative cursor-pointer group">
                      <Image
                        height={300}
                        width={300}
                        src="https://images.ctfassets.net/8vofjvai1hpv/tzbYnPPYHkR5vAuoduYUa/60b3808b2a5df1f80db2c7d78cb53e42/What_is_Confluent_Cloud_video_thumb.jpg?w=768&h=432&q=90&fm=webp&bg=transparent"
                        alt="What is Confluent Cloud?"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full h-20 w-20 flex items-center justify-center group-hover:scale-110 transition-all">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold">
                          What is Confluent Cloud?
                        </h3>
                        <p className="text-sm text-gray-300">
                          Introduction to our cloud-native platform
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogTitle className="sr-only">title</DialogTitle>
                  <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-blue-600 rounded-full p-3 shadow-lg animate-pulse">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-600 rounded-full p-3 shadow-lg animate-pulse">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Demos Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Demos
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Getting Started */}
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Getting Started
                </h3>
              </div>

              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="aspect-video relative overflow-hidden bg-black">
                  <Image
                    width={300}
                    height={300}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsA9nmd_eWmpmahWtFxrJ11ZrujI2AIGco9A&s"
                    alt="How to Build a DSP"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMzOCIgdmlld0JveD0iMCAwIDYwMCAzMzgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzM4IiBmaWxsPSIjMTExODI3Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI4MCIgZmlsbD0iI2Y5NDA2NiIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjhweCIgZm9udC13ZWlnaHQ9ImJvbGQiPkhPVyBUTyBCVUlMRCBBPC90ZXh0Pgo8cmVjdCB4PSI0MCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZjk0MDY2IiByeD0iNCIvPgo8dGV4dCB4PSIxNDAiIHk9IjE1NSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjM2cHgiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EU1A8L3RleHQ+Cjx0ZXh0IHg9IjUwIiB5PSIyMTAiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4Ij5EYXRhIFN0cmVhbWluZyBQbGF0Zm9ybTwvdGV4dD4KPHN2ZyB4PSIzNDAiIHk9IjYwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIGZpbGw9IiMzNzMxZmYiLz4KPHN2ZyB4PSI2MCIgeT0iNjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+CjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzEwYjk4MSIgcng9IjgiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2Y5NDA2NiIgcng9IjQiLz4KPC9zdmc+CjwvdWc+CjwvdXc+CjwvZz4KPC9zdmc+";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* DSP Title Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="text-white">
                      <div className="text-lg font-bold mb-1">
                        HOW TO BUILD A
                      </div>
                      <div className="bg-pink-500 px-4 py-2 rounded font-bold text-2xl inline-block">
                        DSP
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    What is a Data Streaming Platform (DSP)?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    A DSP is composed of six major inter-related components,
                    covered in detail in this video. Each component has evolved
                    over time to serve specific needs in the data streaming
                    platform, but together form a whole that is greater than its
                    sum.
                  </p>
                  <Link target="_blank" href={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhrB71pMVjpw&psig=AOvVaw0DilroIT7IvD70Xpbry5oW&ust=1753970610288000&source=images&cd=vfe&opi=89978449&ved=0CBkQ3YkBahcKEwjo0Mnq3-SOAxUAAAAAHQAAAAAQDA"}>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
                    >
                    Watch Now →
                  </Button>
                      </Link>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Additional Demos */}
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Additional Demos
                </h3>
              </div>

              <div className="space-y-6">
                {/* Confluent Cloud Demo */}
                <Card className="bg-gray-50 border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Database className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          Confluent Cloud
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          View the latest features in the Q1 2025 launch
                        </p>
                        <Button
                          variant="link"
                          className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium text-sm"
                        >
                          Watch Now →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tableflow Demo */}
                <Card className="bg-gray-50 border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded grid grid-cols-2 gap-0.5 p-1">
                            <div className="bg-teal-500 rounded-sm"></div>
                            <div className="bg-teal-500 rounded-sm"></div>
                            <div className="bg-teal-500 rounded-sm"></div>
                            <div className="bg-teal-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          Tableflow
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          Transform Kafka topics via Apache Iceberg® or Delta
                          Lake tables in a few clicks
                        </p>
                        <Button
                          variant="link"
                          className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium text-sm"
                        >
                          Watch Now →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* What is Shift Left Demo */}
                <Card className="bg-gray-50 border-gray-200 hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-6 w-6 text-white transform rotate-180" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          What is Shift Left?
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          Shift security, write data once, read as tables or
                          streams
                        </p>
                        <Button
                          variant="link"
                          className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium text-sm"
                        >
                          Watch Now →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hands On Tutorials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hands On Tutorials
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Follow interactive tutorials, you can skip any topic, tutorials
              will get your hands on in a hands-on learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Continuous Modernization */}
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  height={300}
                  width={300}
                  src="https://procogia.com/wp-content/uploads/2025/06/What-Is-Data-Modernization.jpg"
                  alt="Continuous Modernization"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjMTEyNzM3Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjExMi41IiByPSIzMCIgZmlsbD0iIzM3MzFmZiIvPgo8cGF0aCBkPSJtMTg1IDEwNSAxNSAxMCAtMTUgMTAiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTRweCJDb250aW51b3VzIE1vZGVybml6YXRpb248L3RleHQ+Cjwvc3ZnPg==";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Continuous Modernization
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  Learn continuous modernization through event-driven
                  architecture with real-time data streaming. This comprehensive
                  tutorial covers implementation strategies and best practices.
                </p>
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium text-sm"
                >
                  Start Now →
                </Button>
              </CardContent>
            </Card>

            {/* Flink for Online Retailers */}
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  width={300}
                  height={300}
                  src="https://rotterdamstyle.com/images/2024/10/20/JAF_Flink_AdamOost_27_large.jpg"
                  alt="Flink for Online Retailers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjMGY3Mzc3Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjExMi41IiByPSIzMCIgZmlsbD0iIzEwYjk4MSIvPgo8cGF0aCBkPSJtMTg1IDEwNSAxNSAxMCAtMTUgMTAiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTRweCJGbGluayBmb3IgT25saW5lIFJldGFpbGVyczwvdGV4dD4KPC9zdmc+";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Flink for Online Retailers
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  Discover how Apache Flink powers real-time analytics for
                  e-commerce platforms. Learn to build streaming applications
                  that enhance customer experience and drive business growth.
                </p>
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium text-sm"
                >
                  Start Now →
                </Button>
              </CardContent>
            </Card>

            {/* Confluent Cloud for Apache Flink */}
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  width={300}
                  height={300}
                  src="https://images.ctfassets.net/8vofjvai1hpv/74f71saHAYX6C3s7Vzr77i/56c53db845bea37a5ead38f2530b27f6/flink-streaming-compute-layer-for-kafka.png"
                  alt="Confluent Cloud for Apache Flink"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjMzAzMGZmIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjExMi41IiByPSIzMCIgZmlsbD0iIzZmNmZmZiIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIyMzAiIGN5PSI5MCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxNzAiIGN5PSIxMzUiIHI9IjgiIGZpbGw9IiNmZmZmZmYiLz4KPGN0ZXh0IHg9IjIwMCIgeT0iMTkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTJweCJDb25mbHVlbnQgQ2xvdWQgZm9yIEFwYWNoZSBGbGluazwvdGV4dD4KPC9zdmc+";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Confluent Cloud for Apache Flink
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  Get started with Confluent Cloud managed Apache Flink service.
                  Learn how to process streaming data at scale with
                  enterprise-grade reliability and performance.
                </p>
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium text-sm"
                >
                  Start Now →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apache Kafka Fundamentals Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Apache Kafka® Fundamentals
            </h2>
            <p className="text-gray-300 text-lg">
              Master the core concepts and advanced features of Apache Kafka
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {kafkaTopics.map((topic, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-white text-lg group-hover:text-blue-300 transition-colors">
                      {topic.title}
                    </CardTitle>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <CardDescription className="text-gray-300">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge
                        variant="outline"
                        className="border-white/20 text-gray-300"
                      >
                        {topic.level}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{topic.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-gradient-to-br from-gray-800 via-blue-950 to-indigo-950 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              It Free & Easy to Get Started
            </h2>
            <p className="text-blue-100 mb-6">
              Get a head start on your Kafka and data use cases. Create and
              activate your Confluent Cloud account today with $400 in free
              credits. Spark up your first 60 days.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
              <div className="flex gap-2 mb-6">
                <Button className="flex-1" variant="default">
                  Cloud
                </Button>
                <Button className="flex-1" variant="outline">
                  Self Managed
                </Button>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Confluent Cloud
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  A fully managed, cloud-native service for Apache Kafka®
                </p>
              </div>
              <Button className="w-full mb-4 bg-gray-900 text-white hover:bg-gray-800">
                <span className="flex items-center gap-2">
                  <svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#4285F4" />
                    <text
                      x="50%"
                      y="60%"
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="12"
                      fontWeight="bold"
                      dy=".3em"
                    >
                      G
                    </text>
                  </svg>
                  Sign in with Google
                </span>
              </Button>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="">Position</option>
                  <option value="developer">Developer</option>
                  <option value="architect">Architect</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I want to get product emails, events & news from Confluent
                  </label>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Get Started
                </Button>
              </form>
              <div className="mt-4 text-xs text-gray-400">
                By clicking &quot;Get Started&quot;, you agree to the{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="mb-8">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to start building with Confluent?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our cloud-native data streaming platform and
                build real-time applications at scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-blue-600/20 text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConfluentDemoCenter;
