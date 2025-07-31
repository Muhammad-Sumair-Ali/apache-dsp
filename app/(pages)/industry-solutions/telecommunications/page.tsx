"use client";
import {
  Building2,
  Calendar,
  Clock,
  Database,
  Download,
  ExternalLink,
  MapPin,
  Play,
  Radio,
  Search,
  Truck,
  Tv,
} from "lucide-react";
import { Users, Cloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { JSX, useState } from "react";
import Link from "next/link";
import { Server } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, GitFork } from "lucide-react";
import { Shield, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UseCase {
  icon: JSX.Element;
  title: string;
  linkText: string;
  linkHref: string;
}

const useCases_Card: UseCase[] = [
  {
    icon: <Search className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Real-time Insights on Edge Network Devices",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Building2 className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Smart Cities",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Database className="w-10 h-10 text-blue-600 mb-4" />,
    title: "IoT Data Integration",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Build Private Wireless Networks",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Tv className="w-10 h-10 text-blue-600 mb-4" />,
    title: "TV Network Automation",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Real-Time Field Service Optimization",
    linkText: "Learn More",
    linkHref: "#",
  },
];
const whyDataStreaming = [
  {
    title: "Good Teams Manage Kafka - Efficient Teams Use Confluent",
    description:
      "Learn why telecom companies trust Confluent's cloud-native and fully managed data streaming platform to reduce development & operational costs, infrastructure spend, and downtime risks.",
    cta: "Learn More",
    href: "#",
    image: "https://cdn-icons-png.flaticon.com/512/1149/1149168.png", // Team icon
  },
  {
    title:
      "How DISH Wireless Built a 5G Network With Cloud-Native Data Streaming",
    description:
      "Find out how DISH Wireless uses a data mesh architecture to revolutionize its data strategy, enabling scalable and real-time data sharing across teams and systems. You'll also learn how data mesh can drive innovation and efficiency in modern, data-driven businesses.",
    cta: "Read the Blog",
    href: "#",
    image: "https://cdn-icons-png.flaticon.com/512/2942/2942813.png", // 5G/Network icon
  },
  {
    title:
      "Bridging the Data Divide: How Confluent and DataBricks Are Unlocking Real-Time AI",
    description:
      "The key to making AI truly operational is real-time, trusted data products. Learn how the Confluent and Databricks partnership enables enterprises in telecom and beyond to fully operationalize AI.",
    cta: "Read Blog",
    href: "#",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046844.png", // AI icon
  },
  {
    title:
      "From Telco to TechCo? How Telcos Are Shaping the Future of Communication with Data Streaming",
    description:
      "This panel of industry experts from Telefonica, Germany, TM Forum, Deloitte, and Proximus discuss their everyday usage of data streaming within their companies, how they got there, and what use cases they will be focussing on further down the road.",
    cta: "Watch Webinar",
    href: "#",
    image: "https://cdn-icons-png.flaticon.com/512/3178/3178158.png", // Communication/Telecom icon
  },
];
const webinars = [
  {
    title:
      "Apache Flink on AWS: Building Data Streaming Enterprise Applications",
    description:
      "Discover how to build scalable data streaming applications using Apache Flink on AWS infrastructure for enterprise-grade solutions.",
    date: "Dec 15, 2024",
    duration: "45 min",
    cta: "Watch Now",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    badge: "Popular",
  },
  {
    title: "Real-time Analytics and Data Mesh Governance Strategies",
    description:
      "Learn advanced strategies for implementing real-time analytics while maintaining proper data mesh governance across your organization.",
    date: "Jan 8, 2025",
    duration: "50 min",
    cta: "Register",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    badge: "Upcoming",
  },
  {
    title: "Zero Network and Data Mesh Solutions 2025",
    description:
      "Explore cutting-edge zero network architectures and their integration with modern data mesh solutions for enhanced security and performance.",
    date: "Jan 22, 2025",
    duration: "40 min",
    cta: "Learn More",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
  },
];

const TeleCommunicationsPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Reimagine Telecommunications with Data Streaming for...
                  <br />
                  <span className="text-blue-400">OTT Services|</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Learn why telecommunications companies around the world—from
                  established network providers to pioneering digital service
                  innovators—have turned to Confluent to revolutionize their
                  infrastructure, enhance service delivery, and elevate customer
                  connectivity experiences.
                </p>
              </div>
              <div className="flex flex-col items-center sm:flex-row gap-4">
                <Link
                  target="_blank"
                  href={
                    "https://www.confluent.io/resources/ebook/streaming-use-case-guide/"
                  }
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Download />
                    Download eBook
                  </Button>
                </Link>
                <Link
                  href={
                    "https://www.confluent.io/resources/online-talk/data-streaming-in-real-life-telecom-sector"
                  }
                  className="text-blue-500 underline text-lg px-3"
                >
                  Watch Webinar
                </Link>
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
                        src="https://images.ctfassets.net/8vofjvai1hpv/uDueeJvIOue7f79rRv8KX/8014349365c17ea8359c33aca5547c5f/Globe_Group_Video_Thumb.jpg?w=992&h=558&q=90&fm=webp&bg=transparent"
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
                        src="https://youtu.be/q-SjESsrlI8"
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            What&apos;s Trending
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Section */}
            <div>
              <p className="text-lg font-semibold text-gray-700 mb-4">
                Featured
              </p>
              <Card className="border shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="https://images.ctfassets.net/8vofjvai1hpv/4d0gOZPSlPrW1sS9AoLbga/3465a855bb15a342303d89289d3d5e3e/Industry-Telecom-1200x628-min.png?w=992&h=519&q=90&fm=webp&bg=transparent"
                  alt="Efficiently Modernizing Government Data Environments"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Concepts, Use Cases, Industry Stories: The Ultimate Data
                    Streaming Guide
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Written by Confluent Field CTO Kai Waehner, this book
                    showcases real-world success stories that highlight the
                    power of data streaming and event-driven architectures. With
                    a dedicated chapter on the telco industry, it offers
                    practical insights for unifying operational and analytical
                    data to build real-time, reliable data products that drive
                    industry innovation.
                  </p>
                  <Link
                    href="https://www.confluent.io/resources/ebook/the-ultimate-data-streaming-guide-telecom-edition/"
                    passHref
                  >
                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                    >
                      Download eBook
                      <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* More to Explore Section */}
            <div className="pt-8">
              <p className="text-lg font-semibold text-gray-700 mb-4">
                More to Explore
              </p>
              <div className="space-y-6">
                <Card className="border shadow-sm rounded-lg p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Share2 className="h-7 w-7 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Unlocking the Edge: Data Streaming Goes Where You Go with
                      Confluent
                    </h4>
                    <Link
                      href="https://www.confluent.io/blog/data-streaming-at-the-edge/"
                      passHref
                    >
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                      >
                        Read Blog
                        <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                      </Button>
                    </Link>
                  </div>
                </Card>

                <Card className="border shadow-sm rounded-lg p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Server className="h-7 w-7 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      British Telecom: Using Kafka to Assure TV Signals Reach
                      the Transmitters
                    </h4>
                    <Link
                      href="https://www.confluent.io/events/kafka-summit-london-2024/the-show-must-go-on-using-kafka-to-assure-tv-signals-reach-the-transmitters/"
                      passHref
                    >
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                      >
                        {" "}
                        Watch Recording{" "}
                        <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                      </Button>
                    </Link>
                  </div>
                </Card>

                <Card className="border shadow-sm rounded-lg p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
                    <GitFork className="h-7 w-7 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Making Predictive Customer Support a Reality for Telcos
                    </h4>
                    <Link
                      href="https://www.confluent.io/blog/predictive-customer-support/"
                      passHref
                    >
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                      >
                        Read Blog{" "}
                        <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Clock className="h-8 w-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get started with Confluent today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start building real-time financial applications that scale with
              your business
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 bg-blue-700/20 text-gray-200 hover:bg-blue-800"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1: Why Data Streaming? */}
      <section className="my-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Why Data Streaming?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyDataStreaming.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-500 group"
            >
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  {item.cta}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Calendar className="w-4 h-4 mr-2" />
              Educational Content
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expert Webinars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join industry experts and learn from real-world implementations of
              data streaming technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {webinars.map((webinar, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={webinar.image}
                    alt={webinar.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {webinar.badge && (
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white border-0">
                      {webinar.badge}
                    </Badge>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {webinar.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        {webinar.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {webinar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {webinar.description}
                  </CardDescription>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300">
                    {webinar.cta}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DISH Wireless Spotlight */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <Radio className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <Badge className="mb-2 bg-blue-500/20 text-blue-100 border-blue-400/30">
                    Customer Success Story
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    DISH Wireless
                  </h2>
                </div>
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-blue-100">
              We are taking advantage of technologies like Kafka, and other
              types of data streaming and analytics technologies, supported by
              API, cloud-native platforms to be able to serve 100 million people
              and just give them a completely revolutionary and agile
              experience.
            </blockquote>

            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-white/10 text-white border-white/20">
                5G Network
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20">
                Cloud-Native
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20">
                Data Streaming
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20">
                Real-time Analytics
              </Badge>
            </div>

            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 transition-colors duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Read Case Study
            </Button>
          </div>
        </div>
      </section>

      {/* use cases section  */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:max-w-xl">
            Unlimited Use Cases for Telecommunications
          </h1>
          <p className="text-gray-600 mb-8 md:max-w-2xl">
            With a data streaming platform, telecommunication providers harness
            the value of real-time data, from numerous sources streaming, to
            build rich digital front-end customer experiences and transition to
            real-time backend operations. Explore the use cases to unlock new
            revenue streams, deliver personalized customer experiences, limit
            churn, and reduce operating expenses with a future-proof data
            architecture built to process real-time data at scale.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg mb-16">
            Discover More
          </Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {useCases_Card.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <Link
                  href={item.linkHref}
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center group"
                >
                  {item.linkText}{" "}
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Data Streaming Events */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Upcoming Data Streaming Events for Public Sector
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 - Current New Orleans */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-2xl font-bold">Conference</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-500">Upcoming Event</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                  Current New Orleans
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  Join us for the opportunity to network with your peers and
                  ecosystem partners, hear directly from Confluent leaders,
                  learn from our team of Apache Kafka® experts, and roll up your
                  sleeves in interactive demonstrations and hands-on labs.
                </CardDescription>
                <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>

            {/* Event 2 - Current New Orleans Call for Papers */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Database className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-2xl font-bold">Call for Papers</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-500">
                    Deadline: June 15th
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                  Current New Orleans
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  Looking for innovative ideas or practical insights in data
                  streaming? Or have expertise you like to share with the
                  community? Then get ready — call for papers is open through
                  June 15th, and you can still register to be the first to know.
                </CardDescription>
                <div className="flex items-center text-purple-600 hover:text-purple-700 cursor-pointer">
                  <span className="text-sm font-medium">Submit Paper</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>

            {/* Event 3 - Flink Stream Processing Webinar */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Cloud className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <div className="text-2xl font-bold">Webinar</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Technical
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-500">Online Event</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                  Bringing Stream Processing with Flink to On-Prem & Private
                  Clouds
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  Streaming processing is essential for powering real-time
                  applications that are in use across retail and e-commerce.
                  Join this webinar to learn how Confluent Data Streaming
                  Platform brings stream processing to on-prem.
                </CardDescription>
                <div className="flex items-center text-green-600 hover:text-green-700 cursor-pointer">
                  <span className="text-sm font-medium">Register Now</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Dont Miss Out on Future Events
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Stay updated with the latest data streaming events, workshops,
                and webinars tailored for public sector organizations.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2">
                Subscribe to Updates
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Migration Banner */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 shadow-lg">
            <div className="flex items-center justify-between gap-6">
              <div className="bg-white rounded-full p-4 shadow-md">
                {/* Replace with your icon or SVG */}
                <svg width="48" height="48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="#F97316" />
                  <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="18"
                    fontWeight="bold"
                    dy=".3em"
                  >
                    C
                  </text>
                </svg>
              </div>
              <div>
                <h3 className="text-white text-lg md:text-2xl font-semibold mb-1">
                  Migration to Cloud-Native Kafka Has Never Been Easier
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
              <Button className="bg-white text-blue-700 hover:bg-blue-100 font-semibold px-6 py-3 rounded-lg shadow">
                Confluent Migration Guide
              </Button>
              <Button
                variant="outline"
                className="border-white  text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg"
              >
                Proof of Migration Readiness
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeleCommunicationsPage;
