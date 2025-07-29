"use client"
import { Globe, Users, ArrowRight, CheckCircle, Star, Zap, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function OurPartners() {
  const [selectedCategory, setSelectedCategory] = useState("All Partners");

  const partnerBenefits = [
    {
      title: "Making Your Data Streaming Use Case a Reality",
      description: "Confluent's comprehensive partner network helps organizations implement real-time data streaming solutions across every industry and use case.",
      features: [
        "Expert implementation guidance",
        "Industry-specific solutions",
        "Accelerated time to value",
        "End-to-end support"
      ],
      visual: "network"
    },
    {
      title: "Migrate to Confluent With Ease",
      description: "Confluent migration and sizing helped us move to a solution designed for the cloud, purpose-built for modern data infrastructures.",
      features: [
        "Seamless migration paths",
        "Zero downtime transitions",
        "Cloud-native architecture",
        "Performance optimization"
      ],
      visual: "migration"
    },
    {
      title: "Unlock New Use Cases, Faster",
      description: "Confluent partners bring deep domain expertise and pre-built solutions that help you realize value from data streaming faster than ever.",
      features: [
        "Pre-built integrations",
        "Domain expertise",
        "Faster implementation",
        "Proven methodologies"
      ],
      visual: "unlock"
    },
    {
      title: "Integrate Your Data, Wherever It Lives",
      description: "Whether your data lives on-prem, in the cloud, or across hybrid environments, Confluent partners help you connect everything seamlessly.",
      features: [
        "Hybrid cloud support",
        "Multi-cloud integration",
        "On-premises connectivity",
        "Unified data fabric"
      ],
      visual: "integration"
    }
  ];

  const partnerCategories = [
    {
      name: "Cloud Service Providers",
      partners: [
        { name: "AWS", logo: "AWS", description: "Deep integration with Amazon Web Services" },
        { name: "Google Cloud", logo: "GCP", description: "Native Google Cloud Platform solutions" },
        { name: "Microsoft Azure", logo: "Azure", description: "Comprehensive Azure integrations" }
      ]
    },
    {
      name: "Independent Software Vendors", 
      partners: [
        { name: "Snowflake", logo: "❄️", description: "Real-time data warehouse integration" },
        { name: "Databricks", logo: "🧱", description: "Unified analytics and machine learning" },
        { name: "Elastic", logo: "🔍", description: "Real-time search and analytics" }
      ]
    },
    {
      name: "Global System Integrators",
      partners: [
        { name: "Accenture", logo: "A", description: "Global technology consulting and services" },
        { name: "Deloitte", logo: "D", description: "Digital transformation expertise" },
        { name: "EY", logo: "EY", description: "Business consulting and implementation" }
      ]
    },
    {
      name: "Regional System Integrators",
      partners: [
        { name: "TCS", logo: "TCS", description: "Technology consulting and services" },
        { name: "Infosys", logo: "I", description: "Digital transformation solutions" },
        { name: "Wipro", logo: "W", description: "IT services and consulting" }
      ]
    }
  ];

  const categories = ["All Partners", "Cloud Service Providers", "Independent Software Vendors", "Global System Integrators", "Regional System Integrators"];

  const filteredCategories = selectedCategory === "All Partners" 
    ? partnerCategories 
    : partnerCategories.filter(cat => cat.name === selectedCategory);

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
              <span className="text-blue-200 text-sm font-semibold tracking-wide uppercase mb-4 block">
                Partner Program
              </span>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Making Your Data Streaming Use Case a Reality
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Confluent&apos;s comprehensive partner ecosystem delivers the expertise, 
                solutions, and support you need to succeed with real-time data streaming. 
                From cloud providers to system integrators, our partners help accelerate 
                your digital transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
                  Find a Partner
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-semibold text-lg">
                  Become a Partner
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* Partner Network Visualization */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Central Confluent Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                    <div className="text-blue-900 font-bold text-sm">C</div>
                  </div>
                </div>

                {/* Partner Circles */}
                {[...Array(8)].map((_, index) => {
                  const angle = (index * 45) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                    </div>
                  );
                })}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  {[...Array(8)].map((_, index) => {
                    const angle = (index * 45) * (Math.PI / 180);
                    const x1 = 50 + Math.cos(angle) * 10;
                    const y1 = 50 + Math.sin(angle) * 10;
                    const x2 = 50 + Math.cos(angle) * 48;
                    const y2 = 50 + Math.sin(angle) * 48;
                    
                    return (
                      <line
                        key={index}
                        x1={`${x1}%`} y1={`${y1}%`}
                        x2={`${x2}%`} y2={`${y2}%`}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{benefit.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{benefit.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <Card className="p-8 border-0 shadow-lg">
                      <div className="aspect-w-16 aspect-h-12">
                        <div className={`w-full h-64 rounded-lg flex items-center justify-center relative overflow-hidden ${
                          benefit.visual === 'network' ? 'bg-gradient-to-br from-blue-900 to-purple-900' :
                          benefit.visual === 'migration' ? 'bg-gradient-to-br from-purple-900 to-pink-900' :
                          benefit.visual === 'unlock' ? 'bg-gradient-to-br from-green-900 to-blue-900' :
                          'bg-gradient-to-br from-cyan-900 to-blue-900'
                        }`}>
                          <div className="text-center text-white">
                            {benefit.visual === 'network' && <Globe className="w-16 h-16 mx-auto mb-4" />}
                            {benefit.visual === 'migration' && <Cloud className="w-16 h-16 mx-auto mb-4" />}
                            {benefit.visual === 'unlock' && <Zap className="w-16 h-16 mx-auto mb-4" />}
                            {benefit.visual === 'integration' && <Database className="w-16 h-16 mx-auto mb-4" />}
                            <p className="text-lg font-semibold">{benefit.title}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking to Become a Partner?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join Confluent&apos;s Partner Network and help the industry accelerate digital transformation with real-time data streaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold text-lg">
              Apply Now
            </Button>
            <Button variant="outline" className="px-8 py-4 font-semibold text-lg">
              Partner Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Confluent Partners</h2>
            
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-blue-600 text-white" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Partner Categories */}
          <div className="space-y-16">
            {filteredCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <Card key={partnerIndex} className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-gray-800">{partner.logo}</span>
                        </div>
                        <Star className="w-5 h-5 text-yellow-500" />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </h4>
                      
                      <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Get Started with Confluent Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with real-time data streaming? 
              Connect with our partners or start your journey directly with Confluent.
            </p>
          </div>
          
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