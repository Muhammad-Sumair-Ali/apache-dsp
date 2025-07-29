"use client"

import { Calendar, User, Clock, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [selectedAuthor, setSelectedAuthor] = useState("All Authors");

  const featuredPosts = [
    {
      title: "Data Products, Data Governance, and Change Data Capture",
      category: "Data Governance",
      date: "December 15, 2023",
      readTime: "8 min read",
      author: "Sarah Chen",
      description: "Learn how to implement effective data governance strategies with CDC.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Unleash Smart Servicing with Insights: Transforming Data to Drive Customer Success",
      category: "Customer Success",
      date: "December 12, 2023", 
      readTime: "12 min read",
      author: "Mike Johnson",
      description: "Discover how real-time insights can transform customer servicing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "Event Modeling for Apache Kafka®: How to Build a EDF",
      category: "Apache Kafka",
      date: "December 10, 2023",
      readTime: "15 min read", 
      author: "Alex Rodriguez",
      description: "A comprehensive guide to event modeling patterns in Kafka.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    }
  ];

  const blogPosts = [
    {
      title: "Don't Beat Producer Agents and Data Sinks, but Combining Them with Apache Kafka",
      category: "Apache Kafka",
      date: "December 8, 2023",
      readTime: "10 min read",
      author: "Emily Wang",
      description: "Learn the best practices for combining producers and data sinks.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
    },
    {
      title: "What's Confluent Enterprise Documentation: A Deep Product Guide",
      category: "Product Updates",
      date: "December 5, 2023", 
      readTime: "18 min read",
      author: "David Park",
      description: "Comprehensive overview of Confluent Enterprise features.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
    },
    {
      title: "Leveraging AI/Application Development: Confluent AI Assistant and Confluent for Apache Flink",
      category: "AI & ML",
      date: "December 3, 2023",
      readTime: "14 min read", 
      author: "Lisa Thompson",
      description: "How AI is transforming application development with Confluent.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All Posts", "Apache Kafka", "Data Governance", "Customer Success", "Product Updates", "AI & ML", "Streaming Analytics"];
  const authors = ["All Authors", "Sarah Chen", "Mike Johnson", "Alex Rodriguez", "Emily Wang", "David Park", "Lisa Thompson"];

  return (
    <div className="min-h-screen bg-white">
     
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Confluent Blog</h1>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                Business Value
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                Technical Deep-Dive
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                News
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/95 backdrop-blur-sm"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Button 
                size="sm"
                className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4"
              >
                Go
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-0">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative overflow-hidden">
                    {/* Icon/Visual Element */}
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <Clock className="w-8 h-8" />
                      </div>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="relative">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Author Filter */}
              <div className="relative">
                <select 
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {authors.map(author => (
                    <option key={author} value={author}>{author}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-3 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {blogPosts.length + featuredPosts.length} articles
            </div>
          </div>
        </div>
      </section>

      {/* Additional Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                  <div className="sm:col-span-1">
                    <div className="h-48 sm:h-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center relative">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                          <User className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="sm:col-span-2 p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <div className="space-y-6">
                {blogPosts.slice(0, 2).map((post, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <div className="text-xs text-gray-500">
                          {post.author} • {post.date}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Li</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Tw</span>
                  </div>
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Yt</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}