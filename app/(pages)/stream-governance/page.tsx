"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Activity,
  BarChart3,
  GitBranch,
  Shield,
  Zap,
  CheckCircle,
  Users,
  Search,
  Filter,
  Eye,
  Lock,
  Workflow,
} from "lucide-react"

export default function StreamGovernancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Stream Governance Platform</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Discover, understand, and{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    trust your data streams
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Build confidence in your streaming data and catalogs with comprehensive lineage tracking, real-time
                  quality monitoring, and automated governance tools. Ensure data reliability at scale.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <Image
                  src="https://images.ctfassets.net/8vofjvai1hpv/518LlPSQHOYEjWBcuO8vQn/defdd4814fe93aa4c60f834c1f00d940/stream-hero-v2-1-min.png?w=1350&h=1116&q=90&fm=webp&bg=transparent"
                  alt="Stream Governance Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Quality Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Stream Quality & Monitoring</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor data quality in real-time with advanced analytics and automated alerting. Ensure your streaming
              data meets the highest standards of reliability and accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Activity className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Real-time Monitoring</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Monitor stream health, throughput, and latency with comprehensive real-time dashboards and alerts.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Live performance metrics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Automated alerting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <GitBranch className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Data Lineage</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Track data flow from source to destination with complete visibility into transformations and
                  dependencies.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>End-to-end tracing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Impact analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Quality Validation</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Automated data quality checks with customizable rules and validation frameworks.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Schema validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Custom quality rules</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Advanced Analytics</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Deep insights into stream performance with ML-powered anomaly detection and predictive analytics.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Anomaly detection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Predictive insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <Zap className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Auto-remediation</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Intelligent automated responses to data quality issues with configurable remediation workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Smart workflows</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Incident management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyan-600/20 rounded-lg">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Team Collaboration</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Collaborative tools for data teams with role-based access and integrated communication features.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Role-based access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Team notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

         
        </div>
      </section>

      {/* Stream Catalog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Stream Catalog & Discovery</h2>
                <p className="text-xl text-gray-300">
                  Centralize metadata and streamline data discovery with intelligent cataloging, automated
                  documentation, and powerful search capabilities.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex space-x-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Search className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Smart Discovery</h3>
                    <p className="text-gray-300">
                      AI-powered search and discovery tools help teams find the right data streams quickly and
                      efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Schema Registry</h3>
                    <p className="text-gray-300">
                      Centralized schema management with version control, compatibility checking, and evolution
                      tracking.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Lock className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Access Control</h3>
                    <p className="text-gray-300">
                      Fine-grained permissions and access controls ensure data security and compliance across your
                      organization.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <Workflow className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Automated Documentation</h3>
                    <p className="text-gray-300">
                      Auto-generated documentation keeps your data catalog up-to-date with minimal manual effort.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Explore Catalog Features</Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Data Streams</h3>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Filter className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">user-events-stream</span>
                        <Badge className="bg-green-600/20 text-green-300">Active</Badge>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">Real-time user interaction events</p>
                      <div className="flex space-x-4 text-xs text-gray-500">
                        <span>Partitions: 12</span>
                        <span>Retention: 7d</span>
                        <span>Format: Avro</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">order-processing</span>
                        <Badge className="bg-blue-600/20 text-blue-300">Processing</Badge>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">E-commerce order processing pipeline</p>
                      <div className="flex space-x-4 text-xs text-gray-500">
                        <span>Partitions: 8</span>
                        <span>Retention: 30d</span>
                        <span>Format: JSON</span>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium">analytics-aggregates</span>
                        <Badge className="bg-purple-600/20 text-purple-300">Scheduled</Badge>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">Pre-computed analytics aggregations</p>
                      <div className="flex space-x-4 text-xs text-gray-500">
                        <span>Partitions: 4</span>
                        <span>Retention: 90d</span>
                        <span>Format: Parquet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to transform your data streams?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of data teams who trust StreamFlow for their streaming data governance and quality
              management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}
