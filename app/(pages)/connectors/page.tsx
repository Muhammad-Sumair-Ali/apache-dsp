"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BookOpen,
  Calendar,
  Cloud,
  Code,
  Cog,
  Database,
  Filter,
  HardDrive,
  Linkedin,
  Lock,
  Rocket,
  Server,
  Shield,
  Terminal,
  Users,
  Zap,
  Coffee,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  SiSalesforce,
  SiAmazon,
  SiGooglecloud,
  SiSlack,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiStripe,
  SiShopify,
  SiHubspot,
  SiNetflix,
  SiUber,
  SiAdobe,
} from "react-icons/si";

export default function Connectors() {
  return (
    <div className="min-h-screen bg-[hsl(222,47%,11%)] text-white">
      {/* Hero Section */}
      <section className="gradient-bg pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Break data silos with{" "}
                  <span className="text-[hsl(217,91%,60%)]">
                    real-time connectivity
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Connect your entire business ecosystem with Confluent
                  extensive library of pre-built connectors. Stream data
                  seamlessly between applications, databases, and cloud
                  services.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-lg font-semibold transform hover:scale-105 transition-all"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[hsl(217,91%,60%)] text-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,60%)] hover:text-white text-lg font-semibold"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <Image
                height={600}
                width={600}
                alt="hero"
                className="rounded-xl w-full h-auto shadow-xl object-cover"
                src="https://images.ctfassets.net/8vofjvai1hpv/2IzvPiKxxj3J2XQ07K1pXk/5aced987f0285bc4733a598e56a1dc2e/hero__1_.png?w=900&h=794&q=90&fm=webp&bg=transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connectors Showcase */}
      <section
        id="connectors"
        className="py-16 lg:py-24 bg-[hsl(215,25%,27%)]/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Connect your entire business{" "}
              <span className="text-[hsl(217,91%,60%)]">faster</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stream data between your favorite applications, databases, and
              cloud services with our extensive library of fully-managed
              connectors.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-[hsl(217,91%,60%)] w-20 h-20 rounded-full flex items-center justify-center shadow-2xl">
                <Activity className="text-2xl text-white" />
              </div>
            </div>

            <div className="grid grid-cols-5 gap-8 py-16 max-w-2xl mx-auto">
              {[
                { icon: SiSalesforce, color: "text-blue-400" },
                { icon: SiAmazon, color: "text-orange-400" },
                { icon: Database, color: "text-blue-600" },
                { icon: SiGooglecloud, color: "text-green-400" },
                { icon: Cloud, color: "text-blue-600" },
                { icon: SiSlack, color: "text-purple-400" },
                { icon: SiMongodb, color: "text-green-600" },
                { icon: SiDocker, color: "text-blue-400" },
                { icon: Server, color: "text-gray-400" },
                { icon: SiGithub, color: "text-gray-400" },
                { icon: Cloud, color: "text-blue-400" },
                { icon: SiStripe, color: "text-blue-400" },
                { icon: SiShopify, color: "text-green-400" },
                { icon: BarChart3, color: "text-purple-400" },
                { icon: SiHubspot, color: "text-orange-400" },
              ].map((connector, index) => {
                const IconComponent = connector.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-lg p-4 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-float border border-blue-800"
                    style={{
                      animationDelay: `${(index % 2) * -2}s`,
                    }}
                  >
                    <IconComponent className={`text-2xl ${connector.color}`} />
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-80 h-80 border-2 border-[hsl(217,91%,60%)]/30 rounded-full animate-pulse-slow"></div>
                <div
                  className="absolute w-64 h-64 border border-[hsl(217,91%,60%)]/20 rounded-full animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)]">
              <Zap className="mr-2 h-4 w-4" />
              Browse All Connectors
            </Button>
          </div>
        </div>
      </section>

      {/* Development Cycles */}
      <section id="features" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Save valuable{" "}
              <span className="text-[hsl(217,91%,60%)]">
                development cycles
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reduce time-to-market and eliminate complex integration work with
              our pre-built, fully-managed connectors and real-time data
              streaming platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Card className="card-gradient rounded-xl p-8 border-[hsl(217,91%,60%)]/20">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-8 text-center">
                    Development Time Comparison
                  </h3>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-red-400">
                          Traditional Integration
                        </span>
                        <span className="text-2xl font-bold text-red-400">
                          12-16 weeks
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-4">
                        <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full w-full"></div>
                      </div>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>• Custom connector development</div>
                        <div>• Infrastructure setup & management</div>
                        <div>• Testing & error handling</div>
                        <div>• Monitoring & maintenance</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[hsl(217,91%,60%)]">
                          With Confluent
                        </span>
                        <span className="text-2xl font-bold text-[hsl(217,91%,60%)]">
                          2-4 days
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-4">
                        <div className="bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(188,94%,43%)] h-4 rounded-full w-1/6"></div>
                      </div>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>• Pre-built connectors ready to use</div>
                        <div>• Fully managed infrastructure</div>
                        <div>• Built-in monitoring & alerting</div>
                        <div>• Automatic scaling & recovery</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">
                        85% faster
                      </div>
                      <div className="text-sm text-gray-300">
                        time to production
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Rocket,
                  title: "Rapid Deployment",
                  description:
                    "Get data flowing in minutes, not months. Our pre-built connectors eliminate the need for custom integration development.",
                  color: "bg-[hsl(217,91%,60%)]",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description:
                    "Built-in encryption, authentication, and compliance features ensure your data remains secure across all connections.",
                  color: "bg-[hsl(188,94%,43%)]",
                },
                {
                  icon: Cog,
                  title: "Zero Maintenance",
                  description:
                    "Fully managed connectors with automatic updates, scaling, and monitoring. Focus on your business logic, not infrastructure.",
                  color: "bg-[hsl(162,73%,46%)]",
                },
                {
                  icon: BarChart3,
                  title: "Real-time Insights",
                  description:
                    "Stream data in real-time to power analytics, ML models, and operational dashboards with sub-millisecond latency.",
                  color: "bg-yellow-500",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="card-gradient rounded-xl p-6 hover:bg-[hsl(217,82%,34%)]/20 transition-colors border-[hsl(217,91%,60%)]/20"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <feature.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Modernization */}
      <section className="py-16 lg:py-24 bg-[hsl(215,25%,27%)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Modernize your{" "}
              <span className="text-[hsl(217,91%,60%)]">tech stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bridge legacy systems with modern cloud services. Enable digital
              transformation without disrupting existing operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-gradient rounded-xl p-8 border-[hsl(217,91%,60%)]/20">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Server className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Legacy Systems</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    On-premises databases & applications
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Database, label: "Oracle Database" },
                    { icon: Server, label: "IBM Mainframe" },
                    { icon: HardDrive, label: "Legacy ERP Systems" },
                    { icon: HardDrive, label: "On-premises Storage" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <item.icon className="text-gray-400 h-4 w-4" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient rounded-xl p-8 border-2 border-[hsl(217,91%,60%)]">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[hsl(217,91%,60%)] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Activity className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(217,91%,60%)]">
                    Confluent Platform
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Real-time data streaming bridge
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: ArrowRight,
                      title: "Bidirectional Sync",
                      description:
                        "Real-time data replication between legacy and modern systems",
                      color: "text-[hsl(188,94%,43%)]",
                    },
                    {
                      icon: Filter,
                      title: "Data Transformation",
                      description:
                        "Clean, enrich, and transform data in real-time",
                      color: "text-[hsl(162,73%,46%)]",
                    },
                    {
                      icon: Lock,
                      title: "Enterprise Security",
                      description: "End-to-end encryption and compliance",
                      color: "text-yellow-400",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-[hsl(217,82%,34%)]/20 rounded-lg p-3"
                    >
                      <div className="text-sm font-semibold mb-2">
                        <feature.icon
                          className={`${feature.color} mr-2 inline h-4 w-4`}
                        />
                        {feature.title}
                      </div>
                      <p className="text-xs text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient rounded-xl p-8 border-[hsl(217,91%,60%)]/20">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Modern Cloud</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Scalable cloud-native services
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: SiAmazon,
                      label: "AWS Services",
                      color: "text-orange-400",
                    },
                    {
                      icon: SiGooglecloud,
                      label: "Google Cloud",
                      color: "text-green-500",
                    },
                    {
                      icon: Cloud,
                      label: "Azure Platform",
                      color: "text-blue-500",
                    },
                    {
                      icon: Coffee,
                      label: "AI/ML Services",
                      color: "text-purple-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-sm"
                    >
                      <item.icon className={`${item.color} h-4 w-4`} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "50%", label: "Faster Migration" },
              { value: "99.9%", label: "Data Accuracy" },
              { value: "Zero", label: "Downtime" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[hsl(217,91%,60%)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Productivity */}
      <section id="developers" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Boost developer{" "}
              <span className="text-[hsl(217,91%,60%)]">productivity</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empower your development teams with intuitive tools, comprehensive
              APIs, and extensive documentation to build faster and more
              reliably.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Card className="card-gradient rounded-xl p-6 border-[hsl(217,91%,60%)]/20">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-[hsl(217,91%,60%)] rounded-lg flex items-center justify-center">
                      <Code className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        Developer Console
                      </h3>
                      <p className="text-sm text-gray-400">
                        Visual interface for managing connectors
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-500 mb-2">
                      Create a new connector
                    </div>
                    <div className="text-[hsl(217,91%,60%)]">
                      const connector = await confluent.create(&#123;
                    </div>
                    <div className="text-white ml-4">
                      name: salesforce-sync,
                    </div>
                    <div className="text-white ml-4">type: source,</div>
                    <div className="text-white ml-4">
                      config: &#123; /* ... */ &#125;
                    </div>
                    <div className="text-[hsl(217,91%,60%)]">&#125;);</div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-gradient rounded-xl p-6 border-[hsl(217,91%,60%)]/20">
                  <CardContent className="p-0 text-center">
                    <div className="w-12 h-12 bg-[hsl(188,94%,43%)] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="text-white text-xl" />
                    </div>
                    <h3 className="font-semibold mb-2">Rich Documentation</h3>
                    <p className="text-sm text-gray-400">
                      Complete guides, tutorials, and API references
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-gradient rounded-xl p-6 border-[hsl(217,91%,60%)]/20">
                  <CardContent className="p-0 text-center">
                    <div className="w-12 h-12 bg-[hsl(162,73%,46%)] rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="text-white text-xl" />
                    </div>
                    <h3 className="font-semibold mb-2">Community Support</h3>
                    <p className="text-sm text-gray-400">
                      Active developer community and expert support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="card-gradient rounded-xl p-8 border-[hsl(217,91%,60%)]/20">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Developer Impact
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">
                          Time to First Connection
                        </span>
                        <span className="text-[hsl(217,91%,60%)] font-bold">
                          &lt; 5 minutes
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-[hsl(217,91%,60%)] h-2 rounded-full w-1/12"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">
                          Deployment Complexity
                        </span>
                        <span className="text-[hsl(162,73%,46%)] font-bold">
                          90% Reduced
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-[hsl(162,73%,46%)] h-2 rounded-full w-1/10"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Code Maintenance</span>
                        <span className="text-[hsl(188,94%,43%)] font-bold">
                          Zero Required
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-[hsl(188,94%,43%)] h-2 rounded-full w-0"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Terminal,
                    label: "CLI Tools",
                    color: "text-[hsl(217,91%,60%)]",
                  },
                  {
                    icon: Code,
                    label: "SDKs",
                    color: "text-[hsl(188,94%,43%)]",
                  },
                  {
                    icon: Coffee,
                    label: "Sandbox",
                    color: "text-[hsl(162,73%,46%)]",
                  },
                  {
                    icon: BarChart3,
                    label: "Analytics",
                    color: "text-yellow-400",
                  },
                ].map((tool, index) => (
                  <Card
                    key={index}
                    className="card-gradient rounded-lg p-4 text-center border-[hsl(217,91%,60%)]/20"
                  >
                    <CardContent className="p-0">
                      <tool.icon
                        className={`${tool.color} text-2xl mb-2 mx-auto`}
                      />
                      <div className="font-semibold text-sm">{tool.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to transform your{" "}
                <span className="text-[hsl(217,91%,60%)]">
                  data architecture?
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of developers and enterprises who trust Confluent
                to power their real-time data streaming needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-lg font-semibold transform hover:scale-105 transition-all"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[hsl(217,91%,60%)] text-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,60%)] hover:text-white text-lg font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 mb-6">Trusted by industry leaders</p>
              <div className="flex justify-center space-x-8 opacity-60">
                <Cloud className="text-3xl" />
                <SiNetflix className="text-3xl" />
                <SiUber className="text-3xl" />
                <Linkedin className="text-3xl" />
                <SiAdobe className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started & Testimonial Section */}
      <section className="py-20 bg-[hsl(222,46%,20%)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Get Started Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-2">
              Get started with Confluent Connectors
            </h2>
            <p className="text-blue-100 mb-6">
              New Confluent Cloud signups receive $400 to spend during their
              first 30 days.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 font-semibold text-lg rounded-full">
              Get Started Free
            </Button>
          </div>

          {/* Resources Section */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-blue-200">Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="bg-blue-900 hover:bg-blue-800 text-blue-100 px-4 py-2 rounded-lg font-medium transition"
              >
                Docs: Confluent Connectors
              </Link>
              <Link
                href="#"
                className="bg-blue-900 hover:bg-blue-800 text-blue-100 px-4 py-2 rounded-lg font-medium transition"
              >
                Datasheet: Connectors
              </Link>
              <Link
                href="#"
                className="bg-blue-900 hover:bg-blue-800 text-blue-100 px-4 py-2 rounded-lg font-medium transition"
              >
                Blog: Why fully managed connectors
              </Link>
              <Link
                href="#"
                className="bg-blue-900 hover:bg-blue-800 text-blue-100 px-4 py-2 rounded-lg font-medium transition"
              >
                Blog: Connector design best practices
              </Link>
              <Link
                href="#"
                className="bg-blue-900 hover:bg-blue-800 text-blue-100 px-4 py-2 rounded-lg font-medium transition"
              >
                Video: Real-time cloud data warehouse
              </Link>
              <Link
                href="#"
                className="bg-blue-900 hover:bg-blue-800 text-blue-100 px-4 py-2 rounded-lg font-medium transition"
              >
                Webpage: Kafka integration for your apps
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
