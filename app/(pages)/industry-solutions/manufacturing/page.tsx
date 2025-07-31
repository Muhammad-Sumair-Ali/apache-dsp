"use client";
import { useState } from "react";
import {
  Play,
  Download,
  ArrowRight,
  Search,
  Book,
  Network,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  imageSrc: string;
  companyLogoSrc: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Confluent's data streaming platform enables a scalable, performant, and extensible real-time architecture for us that allows us to serve prime audio content to over 200M unique users each month.",
    name: "Sarah Fox",
    title: "CTO",
    company: "Audacy",
    imageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    companyLogoSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Audacy_Logo.svg",
  },
  {
    id: 2,
    quote:
      "Using Confluent, we've significantly improved our data processing capabilities, leading to faster insights and more agile decision-making across the board.",
    name: "John Doe",
    title: "Head of Data",
    company: "GlobalTech",
    imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    companyLogoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_GlobalTech.svg/320px-Logo_GlobalTech.svg.png", // Replace if fake
  },
  {
    id: 3,
    quote:
      "The real-time data streams provided by Confluent have revolutionized how we interact with our customers, allowing for personalized experiences at scale.",
    name: "Jane Smith",
    title: "VP of Product",
    company: "InnovateCorp",
    imageSrc: "https://randomuser.me/api/portraits/women/65.jpg",
    companyLogoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Innovate_Logo.svg/320px-Innovate_Logo.svg.png", // Replace if fake
  },
];

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Data & Analytics Insight Summit hosted by GDS Group",
    date: "April 28-29, 2025",
    description:
      "Discover strategies to turn data into actionable intelligence. Join the Summit to explore real-time analytics, streamlined data governance, and cross-industry partnerships.",
    link: "#",
  },
  {
    id: 2,
    title: "Executive Summit London",
    date: "May 18, 2025",
    description:
      "From Data Mess to Data Mastery: Rethink Your Data Streaming Strategy. Join us for this exclusive event designed for senior executives. Speak to your account team to learn more.",
    link: "#",
  },
  {
    id: 3,
    title: "Current London",
    date: "May 20-21, 2025",
    description:
      "From next-gen apps to GenAI powered experiences, learn new skills, grow your career, and connect with the community to shape the future of data streaming.",
    link: "#",
  },
];
export default function ManufacturingPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  With ApacheDSP&apos;s Data Streaming Platform You Can...
                  <br />
                  <span className="text-blue-400">Unlock</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Thousands of companies trust Confluent to deliver real-time
                  access to high quality and governed data for applications,
                  analytics, and AI. Learn more in our eBook: Conquer Your Data
                  Mess With Universal Data Products
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Now
                </Button>
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
                        src="https://images.ctfassets.net/8vofjvai1hpv/24nW020iFGyoeOAYwTJYx9/688ea2c999ea38072cfaf3fa4678153a/Citizens_Video_Thumb.jpg?w=992&h=558&q=90&fm=webp&bg=transparent"
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
                        src="https://youtu.be/d66vVqX7JN8"
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

      {/* Metrics Section */}
      <section className="bg-blue-600 py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-5xl font-bold mb-2">5x ROI</h2>
            <p className="text-lg text-blue-100">
              with accelerated data access and time to market
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-2">25%</h2>
            <p className="text-lg text-blue-100">
              reduction in data management total cost of ownership
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-2">70%</h2>
            <p className="text-lg text-blue-100">
              of Fortune 500 rely on data streaming for mission critical use
              cases
            </p>
          </div>
        </div>
      </section>

      {/* What's Trending Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-24  bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What&apos;s Trending
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Tutorial */}
            <div>
              <Card className="bg-white border shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden rounded-lg">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    width={800}
                    height={450}
                    src="https://images.ctfassets.net/8vofjvai1hpv/6l7dWOqpcG0PznG6n8TjaE/ea91fa0f64b149a0525dbebd85fbeea6/image_330-min.png?w=358&h=202&q=90&fm=webp&bg=transparent"
                    alt="Data Streaming Report"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-3">
                      2025 Data Streaming Report
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    The 2025 Data Streaming Report
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    See what 4k+ IT leaders had to say about how data streaming
                    platforms are powering the next wave of innovation by
                    turning data into real-time value. With standout ROI—44% of
                    IT leaders report an ROI of 5x—and competitive gains, tech
                    leaders already on board are outpacing the rest. Don&apos;t
                    get left behind. Find out how you can make your data work
                    smarter and faster for your business.
                  </p>
                  <Link target="_blank" href="#">
                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                    >
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            {/* Quick Access Resources */}
            <div className="space-y-12 pt-12">
              <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer rounded-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Search className="h-7 w-7 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        The Business Value of Data Streaming Platforms
                      </h4>
                      <Button
                        variant="link"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                      >
                        Read Blog{" "}
                        <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer rounded-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Book className="h-7 w-7 text-purple-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        Tech Exec Guide to Data Products
                      </h4>
                      <Button
                        variant="link"
                        className="text-purple-600 hover:text-purple-700 p-0 h-auto font-semibold"
                      >
                        Download Guide{" "}
                        <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer rounded-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                        <Network className="h-7 w-7 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        Maximize Data Value and Innovation Across the
                        Organization
                      </h4>
                      <Button
                        variant="link"
                        className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold"
                      >
                        Download Whitepaper{" "}
                        <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 my-6 overflow-hidden bg-gradient-to-br from-gray-300/40 via-zinc-200/50">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/20 to-zinc-200/20 animate-pulse opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 py-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-700 leading-tight">
                  A Central Nervous System for your Entire Company
                  <br />
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                  The Confluent Data Streaming Platform (DSP) makes your data
                  instantly ready for applications, analytics, and AI. It
                  modernizes your data infrastructure by replacing unreliable
                  point-to-point connections with a real-time flow of data
                  throughout your business. And, removes brittle batch pipelines
                  through a Shift Left approach that continuously processes and
                  governs data as its created.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Learn more about DSP
                </Button>
                <Link className="px-2 text-blue-400 underline text-lg" href="3">
                  Learn more about Shift Left
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
                        src="https://images.ctfassets.net/8vofjvai1hpv/5tyTvrA5pZAOAZGxIvKI9i/6db58d02d097cc1f7d94ac157341ac73/What_is_Data_Streaming_video_thumbnail.jpg?w=992&h=558&q=90&fm=webp&bg=transparent"
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
                        src="https://youtu.be/Sgrks7ssGOA"
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 p-6 md:p-10 lg:p-14 shadow-xl text-white">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full z-10 transition duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full z-10 transition duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Avatar & Info */}
            <div className="flex-shrink-0 text-center lg:text-left space-y-3">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white mx-auto lg:mx-0 shadow-lg">
                <Image
                  src={currentTestimonial.imageSrc || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm text-blue-100">
                  {currentTestimonial.title}
                </p>
              </div>
              <div className="mt-2">
                <Image
                  src={currentTestimonial.companyLogoSrc || "/placeholder.svg"}
                  alt={currentTestimonial.company}
                  width={80}
                  height={24}
                  className="object-contain mx-auto lg:mx-0"
                />
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <p className="text-xl leading-relaxed font-light italic">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
              <Link href="#" passHref>
                <Button
                  variant="link"
                  className="text-white hover:text-blue-200 p-0 h-auto font-semibold transition duration-200"
                >
                  Learn More{" "}
                  <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* events Sidebars Section*/}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-600 font-semibold mb-2">
              Where we&apos;ll be next
            </p>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Data Streaming Events for Visionary Leaders
              </h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md border-gray-300 text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md border-gray-300 text-gray-600 hover:bg-gray-100 bg-transparent"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Join your peers at exclusive events to explore industry-shaping
              trends, unlock new possibilities, and connect with top technical
              leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card
                key={event.id}
                className="border shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{event.date}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <Link href={event.link} passHref>
                    <Button
                      variant="link"
                      className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                    >
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Ready to unlock section */}
      <section className="py-20 px-4 sm:px-6 lg:px-6 bg-white">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-xl p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center">
            <Image
              src="https://images.ctfassets.net/8vofjvai1hpv/1l0rhKtAXxWvNewk1yS1Pu/4f06aa05691bd567985979b35064d2be/Frame.png?w=320&h=181&q=90&fm=webp&bg=transparent"
              alt="Partner Ecosystem Graphic"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to unlock the full power of real-time data?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto lg:mx-0">
              Connect with our trusted GSI partners and discover how together,
              we can help you accelerate innovation, modernize your business,
              and drive impactful results with ApacheDSP Data Streaming
              Platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="#" passHref>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold shadow-md">
                  Explore Our Partner Ecosystem
                </Button>
              </Link>
              <Link href="#" passHref>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold shadow-md bg-transparent"
                >
                  Talk to Our GSI Team <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Want to learn how IT leaders are investing in data streaming &
            moving up the maturity curve?
          </h2>
          <Link href="#" passHref>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
              Download Report
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
