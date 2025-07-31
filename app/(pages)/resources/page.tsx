"use client"
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, FileText, Zap, Database, Shield, Cog, Wrench, BarChart3, Cloud, GitBranch } from 'lucide-react';

function ResourcesPage() {
  const browseTopics = [
    { name: 'Data Streaming', icon: Database, count: '25+' },
    { name: 'Open Source Architecture', icon: GitBranch, count: '18+' },
    { name: 'Modernization', icon: Wrench, count: '15+' },
    { name: 'Observability', icon: BarChart3, count: '12+' },
    { name: 'Security', icon: Shield, count: '20+' },
    { name: 'Microservices', icon: Cog, count: '16+' },
    { name: 'Stream Processing', icon: Zap, count: '22+' },
    { name: 'Cloud Migration', icon: Cloud, count: '14+' }
  ];

  const confluent101Resources = [
    {
      type: 'Whitepaper',
      title: 'Good Teams Manage Kafka. Efficient Teams Use Confluent.',
      description: 'This white paper outlines the true costs of open source Kafka and how you can reduce operational overhead with Confluent.',
      badgeColor: 'bg-blue-500',
      icon: FileText
    },
    {
      type: 'Demo',
      title: 'Shift Your Processing and Governance Left: A OSS Practice Demo',
      description: 'Discover the full potential of self-serve data streaming through open source best practices. Explore novel concepts through the Data Streaming Platform (DSP).',
      badgeColor: 'bg-purple-500',
      icon: Play
    },
    {
      type: 'Whitepaper',
      title: 'Easily Offload Operational Capabilities to Fully-Managed Kafka, Faster',
      description: 'Learn more about the Cloud Why considerations for teams seeking to streamline the power of the cloud to build a new streaming platform. Low lift, low risk investment path.',
      badgeColor: 'bg-cyan-500',
      icon: FileText
    }
  ];

  const whatsNewItems = [
    {
      type: 'Report',
      title: 'Explore the 2024 Data Streaming Report',
      description: 'Discover the trends and tactics of leaders advancing in large-scale streaming.',
      badgeColor: 'bg-emerald-500',
      date: 'Nov 2024'
    },
    {
      type: 'Report',
      title: 'The Data Streaming Revolution: The Force of Kafka + Flink Combined',
      description: 'Dive deeper when new on-boarding new streaming frameworks to understand your effective stream processing solution for enhanced operating performance.',
      badgeColor: 'bg-cyan-500',
      date: 'Oct 2024'
    },
    {
      type: 'Whitepaper',
      title: 'Top 4 Drivers of Kafka Costs (And How to Reduce Them)',
      description: 'Understand the key drivers of Apache Kafka cost management, reducing total cost of ownership, and effective resource management.',
      badgeColor: 'bg-blue-600',
      date: 'Sep 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to the Resource Center
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Learn new skills, explore the latest trends, and find the answers you need to your 
            biggest questions about Confluent and data streaming.
          </p>
        </div>
      </section>

      {/* Browse by Topic Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-4">Browse by topic</h2>
              <p className="text-blue-100 text-lg">
                Explore all the Confluent resources by topic.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {browseTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4 text-center">
                      <Icon className="w-8 h-8 text-white mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-white font-semibold text-sm mb-1">{topic.name}</h3>
                      <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                        {topic.count}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-600">
              See All Resources
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Confluent 101 Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Confluent 101</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Quickly get up to speed with{' '}
              <span className="text-blue-600 font-semibold">data streaming and event-driven architectures</span>.
              Here where you can find the basics of Apache Kafka and how apache DSP
              Data Streaming Platform puts your data in motion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {confluent101Resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${resource.badgeColor} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {resource.description}
                    </CardDescription>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <div className="text-6xl md:text-8xl font-bold text-white/90 mb-4 tracking-wider">
                LIFE IS<br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  BUT A<br />
                  STREAM
                </span>
              </div>
            </div>
            
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Turn your data into your biggest competitive advantage
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                Join ApaChe DSP technical champion Joachim Marcu in this series for technology leaders looking to 
                advance their data revolution and organizational through data streaming.
              </p>
              <p className="text-lg text-blue-200 mb-8 max-w-2xl">
                Instant analytics, real time customer experiences, and business innovation that was previously 
                unimaginable is all in your reach with Big & Streaming.
              </p>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Whats new</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              What coming to your table, new features (tasting as you demand) but mainly. Stay 
              ahead of the flow with our latest discover, blogs, whitepapers, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsNewItems.map((item, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${item.badgeColor} text-white`}>
                      {item.type}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              View All Updates
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;