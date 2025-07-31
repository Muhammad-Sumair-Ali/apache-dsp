"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { PlayCircle, ArrowRight } from "lucide-react";

import {
  UserRoundCheck,
  CreditCard,
  Tags,
  Truck,
  Warehouse,
  BarChart3,
} from "lucide-react";

const useCases = [
  {
    title: "Customer Loyalty Program",
    icon: <UserRoundCheck className="h-8 w-8 text-blue-600" />,
    href: "#",
  },
  {
    title: "Credit Limit Automation",
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    href: "#",
  },
  {
    title: "Personalized In-Store Promotions",
    icon: <Tags className="h-8 w-8 text-blue-600" />,
    href: "#",
  },
  {
    title: "Real-Time Inventory",
    icon: <Warehouse className="h-8 w-8 text-blue-600" />,
    href: "#",
  },
  {
    title: "Demand Forecasting",
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    href: "#",
  },
  {
    title: "Same-Day Delivery",
    icon: <Truck className="h-8 w-8 text-blue-600" />,
    href: "#",
  },
];

const whyDataStreaming = [
  {
    title:
      "Bridging the Data Divide: How Confluent and DataBricks Are Unlocking Real-Time AI",
    description:
      "This lays the foundation for AI by connecting real-time pipelines and making data fully operational.",
    cta: "Read Blog",
    href: "#",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046844.png", // AI icon
  },
  {
    title: "The Ongoing Disruption of Retail",
    description:
      "Learn how your organization can better support retail transformation using data streaming and customer insights.",
    cta: "Download eBook",
    href: "#",
    image: "https://cdn-icons-png.flaticon.com/512/3043/3043855.png", // Shopping/Retail
  },
  {
    title: "Good Teams Manage Kafka – Efficient Teams Use Confluent",
    description:
      "Cut down costs, enhance performance, and speed up innovation with Confluent.",
    cta: "Learn More",
    href: "#",
    image: "https://cdn-icons-png.flaticon.com/512/1149/1149168.png", // Team icon
  },
  {
    title: "Conquer Your Data Mess With Universal Data Products",
    description:
      "Build reusable data products and pipelines across teams with reliability and speed.",
    cta: "Download eBook",
    href: "#",
    image: "https://cdn-icons-png.flaticon.com/512/4380/4380898.png", // Data sync icon
  },
];

export const customerStories = [
  {
    title:
      "Real‑Time Inventory & Replenishment at Walmart, a Practitioner’s View",
    description:
      "Walmart powers real‑time analytics and replenishment systems using Confluent.",
    cta: "Learn More",
    href: "#",
    image: "https://cdn.mos.cms.futurecdn.net/5StAbRHLA4ZdyzQZVivm2c.jpg",
  },
  {
    title: "How Sainsbury’s Delivers Event-Driven Commerce at Scale",
    description:
      "Sainsbury’s uses Confluent to deliver real-time personalized digital experiences.",
    cta: "Read More",
    href: "#",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5RvysTzymYZwELDwwN9Sw4PkUjzCwwYZWg&s",
  },
  {
    title: "How Dollar General Drives Real-Time Retail Innovation",
    description:
      "Dollar General scales operations using streaming data powered by Confluent.",
    cta: "Explore",
    href: "#",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YBi9S96by-vQxpMdO7V-4Vpc4A8rI4DinQ&s",
  },
];

export default function RetailEcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Revolutionize Retail & <br />
              eCommerce for... <br />
              <span className="text-blue-400">Personalization</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-lg">
              Discover why brick-and-mortar stores and online retailers alike
              have embraced the Confluent data streaming platform to transform
              their operations and real-time customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg">
                Download eBook
              </Button>
              <Link
                href="#"
                className="text-white/90 hover:text-white text-lg font-medium flex items-center group transition-colors"
              >
                Watch Webinar{" "}
                <PlayCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none h-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.ctfassets.net/8vofjvai1hpv/3QWJvxFZUzboP5wZR4GAWa/3a0c582ad7444c01c814182544df2ed7/image_267__1_.png?w=750&h=468&q=90&fm=webp&bg=transparent"
                alt="Mobile phone with shopping app and fresh produce"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-white/80 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
        {/* Internal Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-white/80 text-sm font-medium uppercase tracking-wide">
            <Link
              href="#whats-trending"
              className="hover:text-white transition-colors"
            >
              What&apos;s Trending
            </Link>
            <Link
              href="#why-data-streaming"
              className="hover:text-white transition-colors"
            >
              Why Data Streaming
            </Link>
            <Link
              href="#customer-stories"
              className="hover:text-white transition-colors"
            >
              Customer Stories
            </Link>
            <Link
              href="#unlimited-use-cases"
              className="hover:text-white transition-colors"
            >
              Unlimited Use Cases
            </Link>
            <Link
              href="#upcoming-events"
              className="hover:text-white transition-colors"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Dick's Sporting Goods logo"
              width={150}
              height={50}
              className="h-12 object-contain"
            />
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Nuuly logo"
              width={150}
              height={50}
              className="h-12 object-contain"
            />
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Ulta Beauty logo"
              width={150}
              height={50}
              className="h-12 object-contain"
            />
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Sainsbury's logo"
              width={150}
              height={50}
              className="h-12 object-contain"
            />
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Meesho logo"
              width={150}
              height={50}
              className="h-12 object-contain"
            />
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Domino's logo"
              width={150}
              height={50}
              className="h-12 object-contain"
            />
          </div>
        </div>
      </section>

      {/* What's Trending Section */}
      <section id="whats-trending" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            What&apos;s Trending
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Article */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Featured
              </h3>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative bg-blue-500 p-8 flex items-center justify-center">
                  <Image
                    src="https://images.ctfassets.net/8vofjvai1hpv/5sStKanVPGGW8fdgwjvKBS/ec664256791caf935a43ce1069042271/Industry-Retail-1200x628-min.png?w=992&h=519&q=90&fm=webp&bg=transparent"
                    alt="Concepts, Use Cases, Industry Stories: The Ultimate Data Streaming Guide"
                    width={200}
                    height={300}
                    className="h-72 object-contain"
                  />
                  <PlayCircle className="absolute h-12 w-12 text-white/80 hover:text-white cursor-pointer" />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    Concepts, Use Cases, Industry Stories: The Ultimate Data
                    Streaming Guide
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    This book, written by Confluent Field CTO Kai Waehner,
                    showcases real-world success stories that highlight the
                    power of data streaming and event-driven architectures. With
                    a dedicated chapter on retail & ecommerce, it offers
                    practical insights for unifying operational and analytical
                    data to build real-time, reliable data products that drive
                    industry innovation.
                  </CardDescription>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                  >
                    Download eBook{" "}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* More to Explore Articles */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                More to Explore
              </h3>
              <div className="space-y-6">
                <Card className="flex items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="https://images.ctfassets.net/8vofjvai1hpv/5kMZMAYCM2W9clYv7rrOd3/32e3ef9fc3dabe5e917ff822b2454de2/image_268.png?w=100&h=100&q=100&fm=webp&bg=transparent"
                    alt="L'Oreal logo"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain rounded-md mr-4 flex-shrink-0"
                  />
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                      How L&apos;Oréal Powers High-End, Time-Sensitive
                      Operations With Confluent
                    </CardTitle>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center group"
                    >
                      Read Customer Story{" "}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
                <Card className="flex items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="https://images.ctfassets.net/8vofjvai1hpv/hAIHIHZ92qdWD3J8igwY5/39483add6b8d146c67729efb658fe9e1/Data_Warehouse_padded_icon.png?w=100&h=100&q=100&fm=webp&bg=transparent"
                    alt="Real-Time Data Streaming for Smart Warehouses"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain rounded-md mr-4 flex-shrink-0"
                  />
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                      Real-Time Data Streaming for Smart Warehouses
                    </CardTitle>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center group"
                    >
                      Read Blog{" "}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
                <Card className="flex items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="https://images.ctfassets.net/8vofjvai1hpv/3EqPfx00DBHHuboO2fcxHG/e9386956c7e1a53f6fb6c416fb80e92a/AI_padded_icon.png?w=100&h=100&q=100&fm=webp&bg=transparent"
                    alt="How GenAI Leverages Data for Retail Success"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain rounded-md mr-4 flex-shrink-0"
                  />
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                      How GenAI Leverages Data for Retail Success
                    </CardTitle>
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center group"
                    >
                      Learn More{" "}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </div>
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

      {/* Section 2: Customer Stories */}
      <section className="my-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Customer Stories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerStories.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-yellow-400 group"
            >
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={60}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
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

      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Unlimited Use Cases for Retail & eCommerce
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              There are thousands of ways today’s most competitive retailers are
              using real-time data to keep pace with consumer expectations...
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Discover More
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {useCases.map((useCase, idx) => (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div className="bg-blue-100 p-2 rounded-md">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {useCase.title}
                  </h3>
                  <a
                    href={useCase.href}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Learn More →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Upcoming Data Streaming Events Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Upcoming Data Streaming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event 1 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                alt="Data Streaming World Tour"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Data Streaming World Tour
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Join us for the opportunity to network with your peers and
                  ecosystem partners, hear directly from Confluent leaders,
                  learn from our team of Apache Kafka® experts, and roll up your
                  sleeves in interactive demonstrations and hands-on labs.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Event 2 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702"
                alt="Current New Orleans"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Current New Orleans
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Looking for innovative ideas or practical insights in data
                  streaming? Or have expertise you like to share with the
                  community? Then get ready — call for papers is open through
                  June 15th, and you can still register to be the first to know.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Event 3 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://images.ctfassets.net/8vofjvai1hpv/3oSK7FPsxeIgg7PbC8vhkw/3e466154861ed54e374670d10f1fc6d4/data-flow-triggers-email-notification-with-flink-and-sendgrid.png"
                alt="Bringing Stream Processing to Private Clouds"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  Bringing Stream Processing with Flink to On-Prem & Private
                  Clouds
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Streaming processing is essential for powering real-time
                  applications that are in use across retail and e-commerce.
                  Join this webinar to learn how Confluent Data Streaming
                  Platform brings stream processing to on-prem.
                </CardDescription>
              </CardContent>
            </Card>
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
}
