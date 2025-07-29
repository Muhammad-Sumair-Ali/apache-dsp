"use client"

import { Code, Database, Zap, Shield, Users, CheckCircle, ArrowRight, Download, Play, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export default function ForPractitioners() {
  const stats = [
    {
      number: "6 Months",
      description: "Faster development cycles with pre-built connectors and managed infrastructure"
    },
    {
      number: "99.99%",
      description: "Uptime SLA with enterprise-grade reliability and automatic failover"
    },
    {
      number: "Billions",
      description: "Of events processed daily by developers using Confluent Platform"
    }
  ];

  const capabilities = [
    {
      title: "Real-time Analytics",
      description: "Build real-time dashboards and analytics applications",
      features: [
        "Stream processing with ksqlDB",
        "Real-time aggregations",
        "Event-driven architectures",
        "Low-latency data pipelines"
      ]
    },
    {
      title: "Microservices Integration",
      description: "Connect and orchestrate microservices at scale",
      features: [
        "Event-driven communication",
        "Service decoupling",
        "Async messaging patterns",
        "Distributed system coordination"
      ]
    },
    {
      title: "Streaming ETL/CDC",
      description: "Stream data changes in real-time across systems",
      features: [
        "Change data capture",
        "Real-time data synchronization",
        "Schema evolution",
        "Data transformation pipelines"
      ]
    },
    {
      title: "Modern Event Architecture",
      description: "Design event-first architectures for modern applications",
      features: [
        "Event sourcing patterns",
        "CQRS implementation",
        "Saga pattern support",
        "Event-driven workflows"
      ]
    }
  ];

  const platformComponents = [
    {
      icon: Database,
      title: "Stream",
      description: "Confluent platform provides enterprise capabilities for Apache Kafka®",
      features: ["High throughput", "Low latency", "Durability guarantees"]
    },
    {
      icon: Zap,
      title: "Connect",
      description: "120+ pre-built, fully managed connectors to popular data sources",
      features: ["No-code integration", "Schema management", "Error handling"]
    },
    {
      icon: Code,
      title: "Process",
      description: "Build stream processing applications and analytics in real-time",
      features: ["ksqlDB queries", "Kafka Streams", "Apache Flink"]
    },
    {
      icon: Shield,
      title: "Govern",
      description: "Complete data governance with lineage, quality, and security",
      features: ["Schema Registry", "Role-based access", "Audit trails"]
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
              <div className="mb-6">
                <span className="text-blue-200 text-sm font-semibold tracking-wide uppercase">
                  Loved by...
                </span>
                <h1 className="text-5xl font-bold mt-2 mb-4">Architects</h1>
              </div>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Confluent provides a fully managed data streaming platform for modern applications and architectures. 
                Built by the original creators of Apache Kafka®, our platform empowers developers to build event-driven 
                applications with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Start Building
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-semibold text-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download SDK
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Why Confluent is Loved by Developers, Trusted by 80% of the Fortune 100
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">10x faster time to production</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">Zero infrastructure management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">Enterprise-grade security built-in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">Global scale and reliability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">{stat.number}</div>
                <p className="text-blue-100">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Confluent Can Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Confluent Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get real-time insights with capabilities to build exactly what you need, 
              operating with the speed and scale the business demands. Confluent gives 
              developers a competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow border-0 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <ul className="space-y-3">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold text-lg">
              Explore Use Cases
            </Button>
          </div>
        </div>
      </section>

      {/* The Data Streaming Platform Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">The Data Streaming Platform</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Complete set capabilities including stream, connect, process, and govern that work at scale.
            </p>
            <Button className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 font-semibold">
              <Book className="mr-2 h-4 w-4" />
              Documentation
            </Button>
          </div>

          {/* Platform Diagram */}
          <div className="relative mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {platformComponents.map((component, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <component.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{component.title}</h3>
                  </div>
                  <p className="text-blue-200 text-sm mb-4">{component.description}</p>
                  <ul className="text-xs text-blue-300 space-y-1">
                    {component.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1">
              <div className="flex items-center justify-between h-full px-12">
                <div className="flex-1 h-px bg-white/30"></div>
                <div className="w-12"></div>
                <div className="flex-1 h-px bg-white/30"></div>
                <div className="w-12"></div>
                <div className="flex-1 h-px bg-white/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Developer Resources</h2>
            <p className="text-xl text-gray-600">Everything you need to get started and succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">Complete guides, API references, and tutorials</p>
              <Button variant="outline" size="sm">
                View Docs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Examples</h3>
              <p className="text-gray-600 mb-4">Ready-to-use code samples and patterns</p>
              <Button variant="outline" size="sm">
                Browse Code <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 mb-4">Connect with other developers and experts</p>
              <Button variant="outline" size="sm">
                Join Community <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Building Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of developers building real-time applications with Confluent. 
            Get started with our free tier and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 font-semibold text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}