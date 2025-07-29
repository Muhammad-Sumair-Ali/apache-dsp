"use client"

import { TrendingUp, Shield, Globe, Users, BarChart3, CheckCircle, ArrowRight, Download, Play, Eye, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ForExecutives() {
  const businessMetrics = [
    {
      number: "5x ROI",
      description: "Average return on investment within first year of implementation"
    },
    {
      number: "25%",
      description: "Reduction in operational costs through automation and efficiency"
    },
    {
      number: "70%",
      description: "Faster time to market for new digital initiatives and products"
    }
  ];

  const trendingReports = [
    {
      title: "The 2024 Data Streaming Report",
      description: "Industry insights on data streaming adoption and business impact across enterprises",
      category: "Industry Report",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
    },
    {
      title: "The Business Value of Data Streaming Analytics",
      description: "Quantifying the competitive advantage of real-time data processing",
      category: "Business Case",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    },
    {
      title: "Real-time Guide to Data Products",
      description: "How leading companies are building data products that drive revenue",
      category: "Strategy Guide",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop"
    },
    {
      title: "Maximizing Data Value and Monetization Strategies",
      description: "Proven frameworks for turning data into competitive advantage",
      category: "Revenue Strategy",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop"
    }
  ];

  const businessCapabilities = [
    {
      title: "Data & Analytics-Centric Business Strategy by EY",
      description: "Organizations that effectively leverage real-time data achieve 23% faster revenue growth and 12% reduction in costs.",
      highlights: ["Revenue acceleration", "Cost optimization", "Risk mitigation", "Customer satisfaction"]
    },
    {
      title: "Executive Summit Leaders",
      description: "Join 500+ C-level executives in exploring how data streaming transforms business operations and drives innovation.",
      highlights: ["Strategic insights", "Peer networking", "Best practices", "ROI frameworks"]
    },
    {
      title: "Current Market Position",
      description: "Confluent powers data streaming for 80% of Fortune 100 companies, processing over 10 trillion events daily.",
      highlights: ["Market leadership", "Enterprise scale", "Proven reliability", "Global reach"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
   

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                With Confluent&apos;s Data Streaming Platform You Can...
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-xl text-blue-100">
                    Accelerate digital transformation with real-time data insights across all business operations, analytics, and AI.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-xl text-blue-100">
                    Gain competitive advantages through faster decision-making and enhanced customer experiences.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-xl text-blue-100">
                    Reduce operational costs while increasing agility and innovation across your organization.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-semibold text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  ROI Calculator
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-white/20 to-white/5 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="w-16 h-16 text-white mx-auto mb-4" />
                      <p className="text-blue-100">Strategic Business Overview</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Transform Your Business with Real-Time Data
                </h3>
                <p className="text-blue-100 text-center">
                  See how industry leaders are leveraging data streaming to drive innovation, 
                  reduce costs, and accelerate growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Metrics Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">{metric.number}</div>
                <p className="text-blue-100">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Trending Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What&apos;s Trending</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Report */}
            <div>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative">
                    <div className="text-center text-white">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">2024 Data Streaming Report</h3>
                      <p className="text-blue-200 mt-2">Industry Insights & Trends</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The 2024 Data Streaming Report</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive analysis of how enterprises are implementing data streaming 
                    technologies to drive business value. Features insights from 500+ executives 
                    and technical leaders across industries.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold">
                    Download Report <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Trending Articles */}
            <div className="space-y-6">
              {trendingReports.slice(1).map((report, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded mb-2">
                        {report.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                        {report.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{report.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4 block">
                Strategic Impact
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Central Nervous System for your Entire Company
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By connecting all your applications, systems, and data sources in real-time, 
                Confluent creates a unified data infrastructure that enables faster decision-making, 
                improved customer experiences, and operational excellence.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">360° view of business operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Real-time fraud detection and prevention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Personalized customer experiences at scale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Predictive analytics and AI/ML enablement</span>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold text-lg">
                View Business Cases
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">What is Data Streaming?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Real-Time Processing</h4>
                      <p className="text-blue-100 text-sm">Process and act on data as it happens, not hours or days later</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Global Scale</h4>
                      <p className="text-blue-100 text-sm">Handle millions of events per second across multiple regions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Enterprise Security</h4>
                      <p className="text-blue-100 text-sm">Bank-grade security with compliance and governance built-in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Testimonial */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <blockquote className="text-2xl font-medium mb-6 max-w-4xl mx-auto leading-relaxed">
                Confluent transformed our ability to respond to market changes in real-time. 
                We&apos;ve seen a 40% improvement in customer satisfaction and 25% reduction in operational costs.
              </blockquote>
              <cite className="text-lg text-blue-100">
                Sarah Johnson, Chief Technology Officer, Global Financial Services
              </cite>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
              Read Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Data Streaming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Data Streaming Events for Visionary Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join exclusive events designed for executives to explore strategic applications 
              of data streaming and connect with industry peers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessCapabilities.map((capability, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <ul className="space-y-3">
                  {capability.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Ready to unlock the full power of real-time data?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how Confluent can accelerate your digital transformation and drive measurable business results. 
            Join thousands of industry leaders who trust Confluent to power their data strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
              Schedule Executive Briefing
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-semibold text-lg">
              Download Business Case
            </Button>
          </div>
        </div>
      </section>

      {/* Black Footer CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Want to learn how IT leaders are investing in data streaming & moving up the maturity curve?
          </h3>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold">
            Explore Insights
          </Button>
        </div>
      </section>

    </div>
  );
}