"use client"
import { ArrowRight, CheckCircle, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function OurCustomers() {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedUseCase, setSelectedUseCase] = useState("All Use Cases");
  const [selectedCompanySize, setSelectedCompanySize] = useState("All Sizes");

  const storyHighlights = [
    {
      company: "Flix",
      industry: "Transportation",
      logo: "FLIX",
      description: "How Flix built Europe's leading long-distance bus platform with real-time data streaming.",
      impact: "3x faster booking processing",
      caseStudy: "Case Study"
    },
    {
      company: "Notion",
      industry: "Technology",
      logo: "Notion",
      description: "Scaling collaborative workspaces with event-driven architecture and real-time synchronization.",
      impact: "99.9% uptime achieved",
      caseStudy: "Case Study"
    }
  ];

  const customerStories = [
    {
      company: "10x Genomics",
      industry: "Life Sciences",
      logo: "10x",
      description: "Accelerating single-cell analysis with real-time data processing and genomics pipelines.",
      benefits: ["Real-time processing", "Scalable genomics", "Faster discoveries"],
      impact: "50% faster analysis",
      employees: "1000+",
      useCase: "Real-time Analytics"
    },
    {
      company: "8x8",
      industry: "Communications",
      logo: "8x8", 
      description: "Powering cloud communications with event-driven microservices and real-time messaging.",
      benefits: ["Event-driven architecture", "Real-time messaging", "Global scale"],
      impact: "40% cost reduction",
      employees: "5000+",
      useCase: "Microservices"
    },
    {
      company: "Acertus",
      industry: "Automotive",
      logo: "ACERTUS",
      description: "Transforming automotive logistics with real-time tracking and supply chain optimization.",
      benefits: ["Supply chain visibility", "Real-time tracking", "Operational efficiency"],
      impact: "30% efficiency gain",
      employees: "10000+",
      useCase: "IoT & Logistics"
    },
    {
      company: "JPMorgan Chase",
      industry: "Financial Services", 
      logo: "JPM",
      description: "Enhancing fraud detection and risk management with real-time transaction processing.",
      benefits: ["Fraud prevention", "Risk management", "Real-time alerts"],
      impact: "75% faster detection",
      employees: "250000+",
      useCase: "Fraud Detection"
    },
    {
      company: "Alight Solutions",
      industry: "HR Technology",
      logo: "alight",
      description: "Revolutionizing HR technology with event-driven employee experience platforms.",
      benefits: ["Employee experience", "Event-driven HR", "Real-time insights"],
      impact: "60% faster processing",
      employees: "15000+",
      useCase: "Customer Experience"
    },
    {
      company: "Amway",
      industry: "Consumer Goods",
      logo: "Amway",
      description: "Building global e-commerce platforms with real-time inventory and customer data streaming.",
      benefits: ["Global e-commerce", "Real-time inventory", "Customer insights"],
      impact: "45% revenue increase",
      employees: "20000+",
      useCase: "E-commerce"
    }
  ];

  const industries = ["All Industries", "Financial Services", "Technology", "Transportation", "Life Sciences", "Communications", "Automotive", "HR Technology", "Consumer Goods"];
  const useCases = ["All Use Cases", "Real-time Analytics", "Fraud Detection", "Microservices", "IoT & Logistics", "Customer Experience", "E-commerce"];
  const companySizes = ["All Sizes", "1000+", "5000+", "10000+", "50000+"];

  const filteredStories = customerStories.filter(story => {
    return (selectedIndustry === "All Industries" || story.industry === selectedIndustry) &&
           (selectedUseCase === "All Use Cases" || story.useCase === selectedUseCase) &&
           (selectedCompanySize === "All Sizes" || story.employees === selectedCompanySize);
  });

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
                Real-Time Enterprises Run on Confluent
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                The world&apos;s most innovative enterprises trust Confluent&apos;s 
                complete data streaming platform to connect all their applications, 
                systems, and data with real-time streams of events. 
                From banking to retail, manufacturing to telecommunications, 
                and more.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
                  Explore Success Stories
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-semibold text-lg">
                  Contact Sales
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  What is Data Streaming?
                </h3>
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="text-center text-white relative z-10">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Real-Time Data in Motion</p>
                    </div>
                  </div>
                </div>
                <p className="text-blue-100 text-center">
                  See how enterprises are transforming with continuous data streams
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Story Highlights</h2>
            <Button variant="outline" size="sm">
              View All Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storyHighlights.map((story, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-0">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-green-100 px-4 py-2 rounded-lg">
                      <span className="text-2xl font-bold text-green-800">{story.logo}</span>
                    </div>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {story.caseStudy}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {story.company}
                  </h3>
                  <p className="text-gray-600 mb-6">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">{story.impact}</span>
                    <span className="text-sm text-gray-500">{story.industry}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search customer stories..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-center">
            <div className="flex flex-wrap gap-4">
              {/* Industry Filter */}
              <div className="relative">
                <select 
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Use Case Filter */}
              <div className="relative">
                <select 
                  value={selectedUseCase}
                  onChange={(e) => setSelectedUseCase(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {useCases.map(useCase => (
                    <option key={useCase} value={useCase}>{useCase}</option>
                  ))}
                </select>
              </div>

              {/* Company Size Filter */}
              <div className="relative">
                <select 
                  value={selectedCompanySize}
                  onChange={(e) => setSelectedCompanySize(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {companySizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200">
                <div className="mb-6">
                  <div className="bg-gray-100 px-4 py-3 rounded-lg text-center mb-4">
                    <span className="text-2xl font-bold text-gray-800">{story.logo}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{story.industry}</span>
                    <span>{story.employees} employees</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {story.company}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">{story.description}</p>

                <div className="space-y-3 mb-6">
                  {story.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">{story.impact}</span>
                    <Button variant="outline" size="sm">
                      Read Story <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No customer stories match your selected filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedIndustry("All Industries");
                  setSelectedUseCase("All Use Cases");
                  setSelectedCompanySize("All Sizes");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-blue-100">Companies across every industry rely on Confluent</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">80%</div>
              <p className="text-blue-100">of Fortune 100 companies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">5000+</div>
              <p className="text-blue-100">global customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">10T+</div>
              <p className="text-blue-100">events processed daily</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">200+</div>
              <p className="text-blue-100">countries worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how Confluent can transform your business with real-time data streaming. 
            Join thousands of companies already seeing results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
              Start Your Success Story
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