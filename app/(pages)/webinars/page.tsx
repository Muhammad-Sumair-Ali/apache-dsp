
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, Play, ArrowRight, Filter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  category: string;
  image: string;
  type: 'featured' | 'upcoming';
  tags: string[];
}

const webinarsData: Webinar[] = [
  {
    id: '1',
    title: 'Data Mesh with Kafka',
    description: 'Learn how to implement data mesh architecture using Apache Kafka for scalable data streaming.',
    date: 'Aug 15, 2025',
    time: '2:00 PM PST',
    duration: '60 min',
    attendees: 1250,
    category: 'Architecture',
    image: '/api/placeholder/300/200',
    type: 'featured',
    tags: ['Kafka', 'Data Mesh', 'Architecture']
  },
  {
    id: '2',
    title: 'Stream Processing Microservices with Apache Kafka',
    description: 'Discover best practices for building microservices with event streaming capabilities.',
    date: 'Aug 22, 2025',
    time: '1:00 PM PST',
    duration: '45 min',
    attendees: 980,
    category: 'Microservices',
    image: '/api/placeholder/300/200',
    type: 'featured',
    tags: ['Microservices', 'Kafka', 'Streaming']
  },
  {
    id: '3',
    title: 'Real-Time Data Integration with Apache Kafka and Confluent Cloud',
    description: 'Master real-time data integration patterns using Confluent Cloud for enterprise applications.',
    date: 'Aug 29, 2025',
    time: '11:00 AM PST',
    duration: '90 min',
    attendees: 1450,
    category: 'Integration',
    image: '/api/placeholder/300/200',
    type: 'featured',
    tags: ['Integration', 'Cloud', 'Real-time']
  },
  {
    id: '4',
    title: 'Advanced Kafka Configurations and Best Practices',
    description: 'Deep dive into Kafka configurations, performance tuning, and operational best practices.',
    date: 'Sep 5, 2025',
    time: '3:00 PM PST',
    duration: '75 min',
    attendees: 850,
    category: 'Operations',
    image: '/api/placeholder/300/200',
    type: 'upcoming',
    tags: ['Configuration', 'Performance', 'Operations']
  },
  {
    id: '5',
    title: 'Building Event-Driven Systems with Kafka Streams',
    description: 'Learn to build scalable event-driven systems using Kafka Streams for real-time processing.',
    date: 'Sep 12, 2025',
    time: '10:00 AM PST',
    duration: '60 min',
    attendees: 1100,
    category: 'Streaming',
    image: '/api/placeholder/300/200',
    type: 'upcoming',
    tags: ['Event-Driven', 'Kafka Streams', 'Processing']
  },
  {
    id: '6',
    title: 'Securing Apache Kafka in Production Environments',
    description: 'Comprehensive guide to implementing security best practices for Kafka in production.',
    date: 'Sep 19, 2025',
    time: '2:30 PM PST',
    duration: '80 min',
    attendees: 920,
    category: 'Security',
    image: '/api/placeholder/300/200',
    type: 'upcoming',
    tags: ['Security', 'Production', 'Best Practices']
  }
];

export default function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredWebinars, setFilteredWebinars] = useState<Webinar[]>(webinarsData);

  const categories = ['all', 'Architecture', 'Microservices', 'Integration', 'Operations', 'Streaming', 'Security'];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredWebinars(webinarsData);
    } else {
      setFilteredWebinars(webinarsData.filter(webinar => webinar.category === category));
    }
  };

  const featuredWebinars = filteredWebinars.filter(w => w.type === 'featured');
  const upcomingWebinars = filteredWebinars.filter(w => w.type === 'upcoming');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold  mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Webinars with Confluent
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Connect to the expert network of Apache Kafka. Confluent Service along with all latest use 
              cases, best practices, and innovations on data streaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                <Play className="w-5 h-5 mr-2" />
                Watch Now
              </Button>
              <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                Browse All Webinars
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Webinars Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Webinars</h2>
          <p className="text-slate-400 mb-8">Don&apos;t miss these highlighted sessions from our expert team</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredWebinars.slice(0, 3).map((webinar) => (
              <Card key={webinar.id} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group">
                <CardHeader className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-t-lg flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {webinar.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 mb-4 line-clamp-2">
                    {webinar.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {webinar.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {webinar.duration}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full">
            View all featured webinars
          </Button>
        </div>
      </div>

      {/* Upcoming Webinars Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Upcoming Webinars</h2>
            <p className="text-slate-400">Stay ahead with our latest scheduled sessions</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-48 bg-slate-800 border-slate-700 text-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-slate-700">
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              Sort by date
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {upcomingWebinars.map((webinar) => (
            <Card key={webinar.id} className="bg-slate-800/30 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-64 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="w-8 h-8 text-white opacity-80" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <Badge className="bg-green-600/20 text-green-400 border-green-600/30 mb-2">
                          Upcoming
                        </Badge>
                        <CardTitle className="text-white text-xl mb-2 hover:text-blue-400 transition-colors cursor-pointer">
                          {webinar.title}
                        </CardTitle>
                        <CardDescription className="text-slate-400 mb-4">
                          {webinar.description}
                        </CardDescription>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-6 md:ml-4">
                        Register
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>{webinar.attendees.toLocaleString()} registered</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {webinar.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs hover:bg-blue-600/20 hover:text-blue-400 transition-colors cursor-pointer">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-slate-700">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don&apos;t miss another online talk
            </h2>
            <p className="text-slate-400 mb-8">
              Subscribe to the monthly newsletter to get expert talks and case studies delivered to your inbox.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-slate-500">
            <p>&copy; 2025 Confluent, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}