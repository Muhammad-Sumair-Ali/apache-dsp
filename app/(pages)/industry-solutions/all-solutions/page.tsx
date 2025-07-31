"use client";
import { 
  Network,
  Settings,
  Play,
  ArrowRight,
  Database,
  Server,
  Zap,
  BarChart3,
  Globe,
  Shield,
  Users,
  Smartphone,
  Monitor,
  Cloud,
  Activity,
  TrendingUp,
  CheckCircle,
  Star,
  PlayCircle,
  ShoppingCart
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import { useState } from 'react';

const AllSolutionsPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const services = [
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Real-time Analytics",
      description: "Analyze your data as it flows with advanced streaming analytics and real-time processing capabilities.",
      features: ["Live dashboards", "Instant insights", "Smart alerts"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-300" />,
      title: "E-commerce Intelligence",
      description: "Transform online shopping experiences through intelligent data processing and customer behavior analysis.",
      features: ["Customer insights", "Inventory tracking", "Sales optimization"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-200" />,
      title: "Business Intelligence",
      description: "Drive strategic decisions with comprehensive business intelligence and automated reporting solutions.",
      features: ["Custom reports", "Predictive analytics", "Data visualization"]
    }
  ];

  const useCases = [
    { name: "Fraud Detection", category: "Security" },
    { name: "Event Streaming", category: "Infrastructure" },
    { name: "Operational Intelligence", category: "Analytics" },
    { name: "Real-time Recommendations", category: "ML/AI" },
    { name: "IoT Data Processing", category: "IoT" },
    { name: "Streaming ETL", category: "Data Engineering" },
    { name: "Log Aggregation", category: "Monitoring" },
    { name: "Social Media Analytics", category: "Social" },
    { name: "Supply Chain Optimization", category: "Logistics" },
    { name: "Financial Trading", category: "Finance" },
    { name: "Content Personalization", category: "Media" },
    { name: "Network Monitoring", category: "Infrastructure" },
    { name: "Sensor Data Analysis", category: "IoT" },
    { name: "Clickstream Analytics", category: "Web Analytics" },
    { name: "Compliance Monitoring", category: "Governance" },
    { name: "Real-time Pricing", category: "Commerce" },
    { name: "Anomaly Detection", category: "Security" },
    { name: "Campaign Optimization", category: "Marketing" }
  ];

  const cloudPartners = [
    { name: "AWS", logo: "☁️", description: "Amazon Web Services" },
    { name: "Azure", logo: "🔷", description: "Microsoft Azure" },
    { name: "GCP", logo: "🌐", description: "Google Cloud Platform" },
    { name: "Snowflake", logo: "❄️", description: "Data Cloud Platform" }
  ];

  const techPartners = [
    { name: "Apache Kafka", logo: "⚡", description: "Event Streaming" },
    { name: "Apache Spark", logo: "🔥", description: "Unified Analytics" },
    { name: "Kubernetes", logo: "⚙️", description: "Container Orchestration" },
    { name: "Docker", logo: "🐳", description: "Containerization" }
  ];

  const systemIntegrators = [
    { name: "Accenture", logo: "🔷", description: "Global Consulting" },
    { name: "Deloitte", logo: "💼", description: "Professional Services" },
    { name: "IBM", logo: "🔵", description: "Technology Solutions" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-200 border border-blue-400/30">
                <Star className="w-3 h-3 mr-1" />
                Enterprise Solutions
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Make Your Data Products 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Useful
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Draw from the experience of over 5,000 Confluent customers to accelerate your data streaming journey and unlock real-time insights across your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-gray-400 bg-blue-500/20 text-white hover:bg-white/10">
                  Watch Demo
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-400">5000+</div>
                  <div className="text-sm text-gray-400">Active Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">50+</div>
                  <div className="text-sm text-gray-400">Integrations</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                  <DialogTrigger asChild>
                    <div className="aspect-video relative cursor-pointer group">
                      <Image
                        height={324}
                        width={576}
                        src="https://images.ctfassets.net/8vofjvai1hpv/6rq8gezsk5ySXnEFK7dagF/7fce1dfa6da44424dc5ef71754545754/Group_3433.png?w=450&h=372&q=90&fm=webp&bg=transparent"
                        alt="AI Technology Visualization"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full h-20 w-20 flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogTitle className="sr-only">AI Agents Video</DialogTitle>
                  <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
                    <div className="aspect-video">
                      <iframe
                        src="https://youtu.be/H2k-oYmu_HE"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 lg:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 border-blue-400/30">
              <Zap className="w-3 h-3 mr-1" />
              Next-Gen Architecture
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Power All Your Use Cases with a 
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Next-Gen Data Architecture
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unify streaming, batch, and real-time workloads across all your systems and applications, 
              enabling new capabilities you never thought possible with legacy systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Streaming Data Pipelines */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-8">Streaming Data Pipelines</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Database, title: "Data Sources", desc: "Connect to any data source" },
                  { icon: Server, title: "Processing", desc: "Real-time stream processing" },
                  { icon: Cloud, title: "Storage", desc: "Scalable data storage" },
                  { icon: BarChart3, title: "Analytics", desc: "Real-time insights" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-700/50">
                      <item.icon className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                    {index < 3 && (
                      <div className="flex-shrink-0 ml-auto">
                        <ArrowRight className="w-5 h-5 text-blue-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Streaming Applications */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-8">Streaming Applications</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Smartphone, title: "Mobile Apps" },
                  { icon: Monitor, title: "Web Apps" },
                  { icon: Globe, title: "APIs" },
                  { icon: Shield, title: "Security" }
                ].map((item, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow bg-slate-700 border-slate-600">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-700/50">
                        <item.icon className="w-5 h-5 text-blue-300" />
                      </div>
                      <span className="font-medium text-white">{item.title}</span>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 shadow-sm">
                <h4 className="font-semibold text-white mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {[
                    "Real-time data processing",
                    "Scalable microservices architecture", 
                    "Event-driven applications",
                    "Low-latency communications"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-200 hover:bg-blue-900/30">
                Explore Use Cases
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Outcomes Section */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 border-blue-400/30">
              <TrendingUp className="w-3 h-3 mr-1" />
              Business Impact
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Supercharge Your Business 
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Outcomes with Data Streaming
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Boost key business metrics, reduce operational complexity and future-proof your 
              organization with our comprehensive data streaming platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Improve Your Customer Experience",
                description: "Delight your customers with the level of personalization they expect through real-time insights and recommendations powered by streaming data.",
                icon: Users,
                metrics: "95% Customer Satisfaction"
              },
              {
                title: "Build Efficiencies in Your Business Operations", 
                description: "Streamline operations and reduce costs through automated workflows, real-time monitoring, and intelligent decision-making capabilities.",
                icon: Activity,
                metrics: "40% Cost Reduction"
              },
              {
                title: "Launch New Business Models and Services",
                description: "Create innovative revenue streams and business models by leveraging real-time data insights to deliver new products and services.",
                icon: Zap,
                metrics: "3x Revenue Growth"
              }
            ].map((outcome, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-slate-800 border-slate-700">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
                
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-blue-900/50 border border-blue-700/50">
                    <outcome.icon className="w-8 h-8 text-blue-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{outcome.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{outcome.description}</p>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-200 border border-blue-700/50">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {outcome.metrics}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-center text-white border border-blue-700/50">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of companies already using our platform to drive innovation and growth through real-time data streaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-200 hover:bg-blue-800/50">
                <Users className="w-5 h-5 mr-2" />
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 border-blue-400/30">
              <Zap className="w-4 h-4 mr-2" />
              Enterprise Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data streaming solutions designed for modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600/70 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-900/50 border border-blue-700/50">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-6 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6 text-blue-300 hover:text-blue-200 hover:bg-blue-900/30">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              Explore Our Most Popular Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how leading companies leverage our platform across diverse industries and applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-blue-900/30 border-blue-700/50 hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:bg-blue-800/40">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-sm mb-1 text-blue-200">{useCase.name}</h3>
                  <p className="text-xs text-blue-300/70">{useCase.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl">
              View All Use Cases
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 lg:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              Make Data Streaming a Reality
              <span className="block text-blue-400">with Our Partners</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Collaborate with leading technology partners and integrate with your existing tech stack seamlessly
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cloud Partners */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white">
                <Cloud className="w-6 h-6 text-blue-400" />
                Cloud Partners
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cloudPartners.map((partner, index) => (
                  <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">{partner.logo}</div>
                      <h4 className="font-semibold text-white mb-1">{partner.name}</h4>
                      <p className="text-sm text-gray-300">{partner.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technology Partners */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white">
                <Settings className="w-6 h-6 text-blue-400" />
                Technology Partners
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techPartners.map((partner, index) => (
                  <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">{partner.logo}</div>
                      <h4 className="font-semibold text-white mb-1">{partner.name}</h4>
                      <p className="text-sm text-gray-300">{partner.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* System Integrators */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white">
                <Network className="w-6 h-6 text-blue-400" />
                System Integrators
              </h3>
              <div className="space-y-4">
                {systemIntegrators.map((partner, index) => (
                  <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-3">{partner.logo}</div>
                      <h4 className="font-semibold text-white mb-1">{partner.name}</h4>
                      <p className="text-sm text-gray-300">{partner.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-200 hover:bg-blue-900/30 px-8 py-4 rounded-xl">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our platform to unlock the power of real-time data streaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl">
              <Star className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="border-blue-400 text-blue-200 hover:bg-blue-800/50 px-8 py-6 text-lg rounded-xl">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Get Started Today</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the power of real-time data streaming with our comprehensive platform designed for enterprise scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Database className="w-5 h-5 mr-2" />
              View All Solutions
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-200 hover:bg-blue-900/30">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllSolutionsPage;