"use client";
import { Clock, Download, Link2, Play } from "lucide-react";
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
import { RefreshCw, Server, Unlock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, GitFork } from "lucide-react";
import {
  Lightbulb,
  Shield,
  Building,
  MapIcon as City,
  Cloud,
  Share2,
} from "lucide-react";

interface UseCase {
  icon: JSX.Element;
  title: string;
  linkText: string;
  linkHref: string;
}

const useCases_Card: UseCase[] = [
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Actionable Intelligence with AI",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Enhanced National Cybersecurity",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Building className="w-10 h-10 text-blue-600 mb-4" />,
    title: "DoD Software Factories",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <City className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Smart City Applications",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Cloud className="w-10 h-10 text-blue-600 mb-4" />,
    title: "IoT Data Integration",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Share2 className="w-10 h-10 text-blue-600 mb-4" />,
    title: "Secure Data Exchange",
    linkText: "Learn More",
    linkHref: "#",
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
                   "https://www.confluent.io/resources/ebook/streaming-use-case-guide/" }
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
                  href={"https://www.confluent.io/resources/online-talk/data-streaming-in-real-life-telecom-sector"}
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
                  src="https://images.ctfassets.net/8vofjvai1hpv/1oEGicSwiibUJoED2WhvSQ/3d96a997d9f511184e6e9b38663e0d0d/image_290.png?w=576&h=301&q=90&fm=webp&bg=transparent"
                  alt="Efficiently Modernizing Government Data Environments"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Efficiently Modernizing Government Data Environments
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Federal agencies traditionally allocate 80% of IT budgets to
                    operations and maintenance, hindering innovation and
                    modernization efforts despite increasing demands for
                    efficiency and ROI. Learn how Confluent enables efficient
                    agency modernization and interoperability, allowing agencies
                    to minimize O&M costs while maximizing ROI and fostering
                    innovation.
                  </p>
                  <Link href="#" passHref>
                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                    >
                      Read Brief{" "}
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
                      Reducing Kafka Cost of Ownership to Scale Data
                      Modernization
                    </h4>
                    <Link href="#" passHref>
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                      >
                        Download Datasheet{" "}
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
                      Data in Motion Powers the Next Generation of Government
                    </h4>
                    <Link href="#" passHref>
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                      >
                        Download Datasheet{" "}
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
                      Building Trust in AI Means Building Trust in Data
                    </h4>
                    <Link href="#" passHref>
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


      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Efficiently Modernize Your Agency&apos;s Data Architecture With
              Confluent
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the past decade,{" "}
              <span className="text-blue-600 font-semibold">Apache Kafka®</span>{" "}
              has proven to be the best approach for organizations looking to
              become more data driven, from modernizing legacy systems to
              integrating data from the edge to the cloud and back. In the
              public sector, Kafka allows agencies to readily process and derive
              value from their data—paving the path toward real-time data
              analytics, logistics, and zero-trust cybersecurity solutions. But
              using an open source distribution of Kafka comes with
              significant—and often open-ended—operations and maintenance (O&M)
              costs that today&apos;s agencies can&apos;t afford.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With its robust data streaming platform—built around an
              enterprise-grade distribution of Kafka—Confluent enables
              government agencies to bridge the gap between legacy and modern
              data architecture.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="https://images.ctfassets.net/8vofjvai1hpv/1WT2xJy08PRxgTFTacXKPI/3c7fc7b76cd5ac6feb2ca44ed7d219c8/Supreme-C.webp?w=1200&h=675&q=90&fm=webp&bg=transparent"
              alt="Classical government building"
              width={450}
              height={450}
              className="rounded-lg h-96 shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center lg:text-left">
            With the Confluent data streaming platform, you can:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-sm bg-white rounded-lg p-6">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Reduce Kafka O&M Costs with a Production-Ready Platform
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Save on your total cost of ownership with enterprise-grade
                  features to monitor, manage, and optimize Kafka clusters.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white rounded-lg p-6">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Deploy an Enterprise-Grade Data Architecture and Build Modern
                  Applications
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Improve your data architecture&apos;s scalability and
                  resilience to handle increasing data volumes and ensure high
                  availability of mission-critical data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white rounded-lg p-6">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Unlock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Unlock Data Value from the Tactical Edge
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unlock your data&apos;s value by facilitating its seamless
                  transfer between edge, on-premises, and managed environments,
                  and avoid lock-in on proprietary architectures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white rounded-lg p-6">
              <CardContent className="p-0 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Link2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Bridge the Gap Between Legacy and Modern Data Approaches
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Use a wide range of pre-built connectors to integrate Kafka
                  with various data sources, drastically reducing time and
                  effort required to build data pipelines.
                </p>
              </CardContent>
            </Card>
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Unlimited Use Cases for Financial Services
          </h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg mb-16">
            Discover Now
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {useCases_Card?.map((item, index) => (
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:max-w-xl">
            Unlimited Use Cases for Public Sector
          </h1>
          <p className="text-gray-600 mb-8 md:max-w-2xl">
            Public sector agencies are leveraging data streaming and real-time
            processing to bring their most mission-critical applications and
            services to market faster than ever. By leveraging a complete data
            streaming platform, agencies can improve inter-agency collaboration,
            enhance cybersecurity measures, and ensure timely responses to
            public needs. Explore the following use cases to learn more.
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

      {/* Upcoming Data Streaming Events Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Upcoming Data Streaming Events for Public Sector
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
                  Current new orleans
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
};

export default TeleCommunicationsPage;
