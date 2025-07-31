"use client";
import React, { useState } from "react";
import {
  Play,
  Database,
  Zap,
  ArrowRight,
  Sparkles,
  Brain,
  Cpu,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";

export default function GenerativeAiPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Next-Gen AI Platform
                  </Badge>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Generative AI for{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Semantic Search
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Unleash cutting-edge GenAI and agentic AI with a revolutionary data streaming platform. 
                  Bring real-time, contextual and trustworthy data to your LLMs, vector databases, agents, and RAG applications.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Webinar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white bg-blue-600/20 hover:bg-white/10 text-lg px-8 py-4 rounded-full backdrop-blur-sm"
                >
                  Get Started Free
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                  <DialogTrigger asChild>
                    <div className="aspect-video relative cursor-pointer group">
                      <Image
                        height={600}
                        width={800}
                        src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
                        alt="AI Technology Visualization"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full h-20 w-20 flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="font-semibold text-lg mb-1">
                            AI Agents Revolution
                          </h3>
                          <p className="text-sm text-gray-300">
                            Introduction to Next-Gen AI
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogTitle className="sr-only">AI Agents Video</DialogTitle>
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

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 shadow-lg animate-bounce">
                <Database className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 shadow-lg animate-pulse">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 shadow-lg animate-pulse delay-300">
                <Brain className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Getting Started with AI Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover cutting-edge tutorials and resources to accelerate your AI journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Tutorial */}
            <div>
              <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer overflow-hidden rounded-3xl">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    width={800}
                    height={450}
                    src="https://images.pexels.com/photos/8386763/pexels-photo-8386763.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
                    alt="AI Agents and AutoGen Tutorial"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
                      <Play className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white mb-3">
                      New Tutorial
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    How to Build Real-Time Enterprise AI Agents with AutoGen
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Master the art of building scalable multi-agent systems for enterprise use cases. 
                    Learn AutoGen integration with advanced data streaming platforms.
                  </p>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  >
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-3">
                      Register Now →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Quick Access Resources */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-0 hover:shadow-lg transition-all duration-300 group cursor-pointer rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Network className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        Event-Driven Design for Multi-Agent Systems
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Comprehensive guide to architecting scalable AI agent ecosystems
                      </p>
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                      >
                        Watch Now →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-0 hover:shadow-lg transition-all duration-300 group cursor-pointer rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Cpu className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        Why MCP is Revolutionary for AI
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Understanding the breakthrough impact of Model Context Protocol
                      </p>
                      <Button
                        variant="link"
                        className="text-purple-600 hover:text-purple-700 p-0 h-auto font-semibold"
                      >
                        Watch Now →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-0 hover:shadow-lg transition-all duration-300 group cursor-pointer rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Brain className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        The Complete Developer Guide to RAG
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        Advanced techniques for Retrieval-Augmented Generation systems
                      </p>
                      <Button
                        variant="link"
                        className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold"
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
      </section>

      {/* Hands-On Tutorials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Hands-On Learning Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Interactive tutorials designed to accelerate your AI mastery through practical implementation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tutorial Cards */}
            {[
              {
                title: "AI-Driven Modernization",
                description: "Master continuous modernization through event-driven architecture with real-time AI streaming capabilities.",
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=1",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Streaming Analytics for E-commerce",
                description: "Build powerful real-time analytics systems that enhance customer experience and drive business growth.",
                image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=1",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Cloud-Native AI Infrastructure",
                description: "Deploy enterprise-grade AI applications with managed streaming services and scalable architecture.",
                image: "https://images.pexels.com/photos/8386763/pexels-photo-8386763.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&dpr=1",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((tutorial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 group cursor-pointer overflow-hidden rounded-2xl">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    width={400}
                    height={225}
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`bg-gradient-to-r ${tutorial.gradient} rounded-full p-4 shadow-lg`}>
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {tutorial.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-blue-400 hover:text-blue-300 p-0 h-auto font-semibold"
                  >
                    Start Tutorial →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partnership Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-3xl bg-white/10 backdrop-blur-sm shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 border border-white/20">
            <div className="flex-shrink-0">
              <div className="w-32 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=200&h=120&dpr=1"
                  alt="Partnership Logo"
                  width={120}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0 text-center md:text-left">
              <h3 className="text-white text-2xl font-bold mb-3">
                Revolutionary AI Partnership Announcement
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Experience next-generation AI applications with real-time connectivity and vector search capabilities. 
                Build intelligent, streaming AI applications with the freshest data for your GenAI workloads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full shadow-lg">
                  Read Announcement
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-full">
                  Explore Solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time AI Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real-Time AI Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how industry leaders are transforming their operations with cutting-edge AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-Powered Supply Chain Optimization",
                company: "Global Enterprise Solutions",
                description: "Revolutionary supply chain optimization using real-time data streaming and predictive analytics.",
                image: "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
                linkText: "Watch Case Study →",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Scaling AI Agents for Automation",
                company: "Tech Innovation Hub",
                description: "Advanced agentic AI systems enabling unprecedented automation and efficiency gains.",
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
                linkText: "Read Success Story →",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Intelligent Recommendation Engine",
                company: "Communication Platform",
                description: "Real-time personalization powered by streaming data and advanced machine learning algorithms.",
                image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
                linkText: "Explore Implementation →",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "AI-Driven Customer Support",
                company: "Logistics Leader",
                description: "Intelligent chatbot delivering instant support through streaming AI and advanced language models.",
                image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
                linkText: "View Case Study →",
                gradient: "from-orange-500 to-red-500"
              },
            ].map((useCase, idx) => (
              <Card key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden border-0">
                <div className="h-48 w-full relative overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${useCase.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${useCase.gradient} text-white border-0`}>
                      Success Story
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <p className="text-sm text-gray-500 font-medium">{useCase.company}</p>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold text-sm group-hover:translate-x-1 transition-transform"
                  >
                    {useCase.linkText}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Sparkles className="mr-2 h-5 w-5" />
              Explore All Success Stories
            </Button>
          </div>
        </div>
      </section>
             {/* Why Confluent Data Streaming Platform Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Confluent Data Streaming Platform</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Build a real-time, contextualized, and trustworthy knowledge base for your GenAI applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Stream icon"
                  width={100}
                  height={100}
                  className="h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Stream</CardTitle>
                <CardDescription className="text-gray-600">
                  Continuously capture and share real-time feeds with AI systems and applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Connect icon"
                  width={100}
                  height={100}
                  className="h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Connect</CardTitle>
                <CardDescription className="text-gray-600">
                  Integrate disparate data from any environment with 120+ pre-built and custom connectors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Process icon"
                  width={100}
                  height={100}
                  className="h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Process</CardTitle>
                <CardDescription className="text-gray-600">
                  Use Flink-driven processing to enrich data with real-time context at query execution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Govern icon"
                  width={100}
                  height={100}
                  className="h-24 object-contain mb-4"
                />
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">Govern</CardTitle>
                <CardDescription className="text-gray-600">
                  Use data lineage, quality controls and traceability to ensure data for AI is sound and verifiable.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accelerate Your Journey to GenAI with Confluent + Partners Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Accelerate Your Journey to GenAI <br /> with Confluent + Partners
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Click each partner logo to learn how we work together to implement GenAI.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cloud Providers */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Cloud Providers</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/placeholder.svg?height=50&width=120", alt: "AWS logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Google Cloud logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Azure logo" },
                ].map((logo, index) => (
                  <Link key={index} href="#" className="block">
                    <Card className="flex items-center justify-center p-4 h-24 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.alt}
                        width={120}
                        height={50}
                        className="object-contain"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Platforms & Tools */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">AI Platforms & Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/placeholder.svg?height=50&width=120", alt: "Databricks logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Snowflake logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "LangChain logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "MongoDB logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Elastic logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Pinecone logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Singlestore logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Weaviate logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Zilliz logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Neo4j logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Couchbase logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Drant logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Vectara logo" },
                ].map((logo, index) => (
                  <Link key={index} href="#" className="block">
                    <Card className="flex items-center justify-center p-4 h-24 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.alt}
                        width={120}
                        height={50}
                        className="object-contain"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* System Integrators */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">System Integrators</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/placeholder.svg?height=50&width=120", alt: "LinkUp.AI logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "Allata logo" },
                  { src: "/placeholder.svg?height=50&width=120", alt: "EY logo" },
                ].map((logo, index) => (
                  <Link key={index} href="#" className="block">
                    <Card className="flex items-center justify-center p-4 h-24 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.alt}
                        width={120}
                        height={50}
                        className="object-contain"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};