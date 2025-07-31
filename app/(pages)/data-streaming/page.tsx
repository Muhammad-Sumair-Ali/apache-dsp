"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Zap,
  Database,
  CheckCircle,
  Play,
  Cpu,
  Network,
  Globe,
  Clock,
  Activity,
  Server,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react"

export default function DataStreamingPage() {
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
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 px-4 py-2">
                  Next-Generation Data Streaming
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  The Better, Faster Way to{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Stream Data
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Build real-time, resilient, and connected applications with next-generation streaming at a fraction of
                  the cost. Experience enterprise-grade performance with developer-friendly simplicity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
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
                  <span>Deploy in minutes</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 shadow-2xl">
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-white/10">
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400">StreamCore Dashboard</div>
                  </div>

                  {/* Mock Dashboard Content */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-600/20 rounded-lg p-3">
                        <div className="text-xs text-blue-300 mb-1">Throughput</div>
                        <div className="text-lg font-bold text-white">2.4M/s</div>
                      </div>
                      <div className="bg-green-600/20 rounded-lg p-3">
                        <div className="text-xs text-green-300 mb-1">Latency</div>
                        <div className="text-lg font-bold text-white">{"<5ms"}</div>
                      </div>
                      <div className="bg-purple-600/20 rounded-lg p-3">
                        <div className="text-xs text-purple-300 mb-1">Uptime</div>
                        <div className="text-lg font-bold text-white">99.99%</div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-white font-medium">Active Streams</div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-300">user-events</span>
                          <span className="text-blue-400">1.2M/s</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-300">order-processing</span>
                          <span className="text-green-400">850K/s</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-300">analytics-pipeline</span>
                          <span className="text-purple-400">420K/s</span>
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Stream Smarter, Scale Faster,{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Save Bigger
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Apache Kafka® powered by Confluent delivers unmatched performance, reliability, and cost efficiency.
              Experience the next evolution of data streaming with enterprise-grade security, global availability, and
              developer-first tooling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Ultra-High Performance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Process millions of events per second with sub-millisecond latency. Our optimized infrastructure
                  delivers 10x better performance than traditional messaging systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Infinite Scalability</h3>
                <p className="text-gray-300 leading-relaxed">
                  Scale from prototype to production seamlessly. Auto-scaling infrastructure adapts to your workload,
                  ensuring consistent performance at any scale without manual intervention.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Global Availability</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deploy across multiple regions with built-in disaster recovery. 99.99% uptime SLA with automatic
                  failover ensures your data streams never stop flowing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              StreamCore rebuilt Kafka to create{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Kora</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our next-generation streaming engine delivers unparalleled performance, simplified operations, and
              intelligent automation. Experience the future of data streaming today.
            </p>
          </div>

          {/* Interactive Dashboard */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 shadow-2xl">
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-white/10">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-bold text-white">Kora Analytics Dashboard</div>
                    <Badge className="bg-green-600/20 text-green-300">Live</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Real-time</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-blue-600/20 rounded-xl p-4 border border-blue-600/30">
                    <div className="flex items-center space-x-3 mb-2">
                      <Activity className="w-5 h-5 text-blue-400" />
                      <span className="text-sm text-blue-300">Throughput</span>
                    </div>
                    <div className="text-2xl font-bold text-white">4.2M/sec</div>
                    <div className="text-xs text-green-400">↗ +12% from last hour</div>
                  </div>

                  <div className="bg-green-600/20 rounded-xl p-4 border border-green-600/30">
                    <div className="flex items-center space-x-3 mb-2">
                      <Zap className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-green-300">Latency</span>
                    </div>
                    <div className="text-2xl font-bold text-white">2.1ms</div>
                    <div className="text-xs text-green-400">↗ 99.9% under 5ms</div>
                  </div>

                  <div className="bg-purple-600/20 rounded-xl p-4 border border-purple-600/30">
                    <div className="flex items-center space-x-3 mb-2">
                      <Server className="w-5 h-5 text-purple-400" />
                      <span className="text-sm text-purple-300">Partitions</span>
                    </div>
                    <div className="text-2xl font-bold text-white">1,247</div>
                    <div className="text-xs text-blue-400">Across 12 clusters</div>
                  </div>

                  <div className="bg-orange-600/20 rounded-xl p-4 border border-orange-600/30">
                    <div className="flex items-center space-x-3 mb-2">
                      <Database className="w-5 h-5 text-orange-400" />
                      <span className="text-sm text-orange-300">Storage</span>
                    </div>
                    <div className="text-2xl font-bold text-white">847TB</div>
                    <div className="text-xs text-gray-400">Compressed</div>
                  </div>
                </div>

                {/* Stream Status */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Active Streams</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-medium">user-interactions</span>
                        </div>
                        <span className="text-blue-400 font-mono">1.8M/s</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-medium">payment-events</span>
                        </div>
                        <span className="text-green-400 font-mono">950K/s</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-medium">analytics-pipeline</span>
                        </div>
                        <span className="text-purple-400 font-mono">1.4M/s</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Regional Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">US-East</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-400">80%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">EU-West</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="w-3/5 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-400">60%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Asia-Pacific</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className="w-2/5 h-full bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-400">40%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Explore Kora Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Scaling Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Scale Up, Scale Down—
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    No Stress, No Mess
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Elastic scaling that adapts to your workload automatically. Pay only for what you use with intelligent
                  resource optimization that reduces costs by up to 70% compared to traditional solutions.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Auto-Scaling Intelligence</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    ML-powered scaling that predicts demand and adjusts resources in real-time, ensuring optimal
                    performance during traffic spikes.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Cost Optimization</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Intelligent resource allocation and automatic rightsizing reduce infrastructure costs while
                    maintaining peak performance.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Zero-Downtime Scaling</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Scale your clusters without interruption. Hot-swappable resources ensure continuous operation during
                    scaling events.
                  </p>
                </div>
              </div>
            </div>

            {/* Scaling Chart */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Resource Utilization</h3>
                    <Badge className="bg-green-600/20 text-green-300">Optimized</Badge>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-end justify-between h-32">
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className="w-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                          style={{ height: "60%" }}
                        ></div>
                        <span className="text-xs text-gray-400">Peak</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className="w-12 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg"
                          style={{ height: "40%" }}
                        ></div>
                        <span className="text-xs text-gray-400">Normal</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className="w-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg"
                          style={{ height: "25%" }}
                        ></div>
                        <span className="text-xs text-gray-400">Low</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className="w-12 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-lg"
                          style={{ height: "80%" }}
                        ></div>
                        <span className="text-xs text-gray-400">Spike</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">70%</div>
                        <div className="text-xs text-gray-400">Cost Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">{"<30s"}</div>
                        <div className="text-xs text-gray-400">Scale Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                99.99% Uptime,
              </span>
              <br />
              100% Peace of Mind
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade reliability with comprehensive monitoring, automatic failover, and 24/7 expert support.
              Your data streams never sleep, and neither do we.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Reliability Features */}
            <div className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Disaster Recovery</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Multi-region replication with automatic failover ensures your data is always available.
                  </p>
                  <div className="text-xs text-green-400">RTO: {"<5 minutes"}</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center">
                      <Activity className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Health Monitoring</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Real-time health checks and predictive maintenance prevent issues before they occur.
                  </p>
                  <div className="text-xs text-blue-400">24/7 Monitoring</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Expert Support</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Dedicated support team with deep Kafka expertise available around the clock.
                  </p>
                  <div className="text-xs text-purple-400">{"<15min Response"}</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-600/20 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">SLA Guarantee</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">
                    Industry-leading SLA with financial backing and transparent status reporting.
                  </p>
                  <div className="text-xs text-orange-400">99.99% Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Uptime Chart */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Uptime Performance</h3>
                    <Badge className="bg-green-600/20 text-green-300">All Systems Operational</Badge>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-end justify-between h-40">
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className="w-16 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg"
                          style={{ height: "95%" }}
                        ></div>
                        <span className="text-xs text-gray-400">Q1</span>
                        <span className="text-xs text-green-400">99.98%</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className="w-16 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg"
                          style={{ height: "98%" }}
                        ></div>
                        <span className="text-xs text-gray-400">Q2</span>
                        <span className="text-xs text-green-400">99.99%</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className="w-16 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg"
                          style={{ height: "100%" }}
                        ></div>
                        <span className="text-xs text-gray-400">Q3</span>
                        <span className="text-xs text-green-400">100%</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div
                          className="w-16 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg"
                          style={{ height: "97%" }}
                        ></div>
                        <span className="text-xs text-gray-400">Q4</span>
                        <span className="text-xs text-green-400">99.99%</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">99.99%</div>
                        <div className="text-xs text-gray-400">Average Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">{"<5min"}</div>
                        <div className="text-xs text-gray-400">MTTR</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">0</div>
                        <div className="text-xs text-gray-400">Data Loss Events</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Network Visualization */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <div className="bg-slate-900/90 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Global Cluster Network</h3>
                    <Badge className="bg-blue-600/20 text-blue-300">Multi-Region</Badge>
                  </div>

                  <div className="relative h-64 flex items-center justify-center">
                    {/* Central Hub */}
                    <div className="absolute w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <Server className="w-8 h-8 text-white" />
                    </div>

                    {/* Surrounding Nodes */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Network className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="url(#connectionGradient)" strokeWidth="2" />
                      <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="2" />
                      <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="2" />
                      <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">12</div>
                      <div className="text-xs text-gray-400">Active Clusters</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">5</div>
                      <div className="text-xs text-gray-400">Regions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Your Streams,
                  <br />
                  Your Clusters,
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Your Way
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Complete control over your streaming infrastructure. Deploy anywhere, configure everything, and
                  integrate with your existing tools seamlessly.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Server className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Flexible Deployment</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Deploy on-premises, in the cloud, or hybrid. Full control over your infrastructure with enterprise
                    security and compliance.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Network className="w-4 h-4 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Custom Configurations</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Fine-tune every aspect of your streaming setup. Custom retention policies, partitioning strategies,
                    and performance optimizations.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Universal Integration</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Connect with 200+ pre-built connectors or build custom integrations. Works with your existing data
                    stack seamlessly.
                  </p>
                </div>
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Explore Deployment Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Turn your data into your biggest{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  competitive advantage
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of forward-thinking companies who transformed their business with real-time data
                streaming. Experience the power of instant insights and lightning-fast decision making.
              </p>
            </div>

            <div className="mb-12">
              <div className="text-6xl lg:text-8xl font-black text-white/10 mb-4">LIFE IS</div>
              <div className="text-6xl lg:text-8xl font-black text-white/10 mb-4">BUT A</div>
              <div className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                STREAM
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold"
              >
                Talk to an Expert
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

