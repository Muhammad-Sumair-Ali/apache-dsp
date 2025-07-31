"use client"

import React from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const DataGlossary = () => {
  const glossaryItems = [
    {
      category: "ARTIFICIAL INTELLIGENCE",
      title: "Agentic AI",
      description: "Agentic AI refers to autonomous artificial intelligence systems that can perceive, reason, and adaptive decision-making capabilities. By agents are AI algorithms that can observe their environment, and make independent decisions to achieve specific goals."
    },
    {
      category: "FEATURE ANALYSIS",
      title: "What is Apache Iceberg?",
      description: "Apache Iceberg is a high-performance table format for huge analytic datasets."
    },
    {
      category: "APACHE SPARK",
      title: "Apache Kafka: Benefits and Use Cases",
      description: "Apache Kafka is a distributed streaming platform that is incredibly popular with enterprise development projects within the distributed streaming paradigm. Since, Spark 3.3, used by over 80% of the Fortune 100, the big data processing ecosystem has democratized by making streaming and batch more accessible and more."
    },
    {
      category: "APPLICATION INTERFACES",
      title: "Application Programming Interface (API)",
      description: "An application programming interface (API) is a set of protocols and rules that allows different software applications to communicate with each other. APIs can download, an introduction to how API endpoints and how to use."
    },
    {
      category: "DATA SECURITY",
      title: "Application Security (AppSec)",
      description: "Application security refers to the software development and best practices, architecture, and tools surrounding the security of the software applications throughout their entire lifecycle."
    },
    {
      category: "ADVANCED FRAMEWORKS",
      title: "AutomativeOps",
      description: "AutomativeOps (AIOps) is designed to assess and enhance the software development processes within the organization."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The Data Glossary
        </h1>
        <p className="text-blue-200 max-w-3xl mx-auto text-lg leading-relaxed">
          Our introductions to all real-time data technologies and concepts including data streaming, 
          ETL pipelines, AI databases, and event-driven systems from Confluent, the original creators 
          of Apache Kafka.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search..." 
              className="pl-10 py-3 text-lg border-gray-300 focus:border-blue-500 rounded-lg"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">
              All
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
              A
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
              B
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
              C
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
              D
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
              E
            </Button>
          </div>

          {/* Page indicator */}
          <div className="mb-6 text-gray-600">
            A-D
          </div>

          {/* Glossary Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {glossaryItems.map((item, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <Button variant="outline" size="sm" className="border-gray-300">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300">
              2
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300">
              3
            </Button>
            <span className="text-gray-500">...</span>
            <Button variant="outline" size="sm" className="border-gray-300">
              15
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataGlossary