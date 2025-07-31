"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ArrowRight,
  Server,
  Code,
  Shield,
  Headphones,
  PlayCircle,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ConfluentCloudPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-950  text-white py-6">
        <div className="max-w-7xl min-h-[80vh] mx-auto px-4 flex flex-col md:flex-row items-center gap-12 py-4">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Harness Real-Time Data, <br />
              Lower Your Costs – Any Scale, Any Cloud
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Confluent Cloud is the fully managed deployment of our data
              streaming platform. Effortlessly deploy and scale across clouds,
              protect data, and focus on results—not managing your stack.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-blue-900 hover:bg-blue-100 font-semibold px-8 py-4 rounded-full shadow-lg">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg flex items-center"
                  >
                    <PlayCircle className="mr-2 h-6 w-6" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogTitle className="sr-only">
                  Confluent Cloud Demo
                </DialogTitle>
                <DialogContent className="max-w-3xl w-full p-0 bg-transparent border-none shadow-none">
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                      width="940"
                      height="529"
                      src="https://www.youtube.com/embed/PrjltxeXRyw"
                      title="Moving at the Scale of Notion: How Confluent Powers 100M+ Users Daily"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-[50vw] max-h-[70vh] rounded-xl"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <Image
                src={
                  "https://images.ctfassets.net/8vofjvai1hpv/3Y5X3yJMnZfIawaZgSXm5A/231fcb2ae9a7e826f6e3c5a1f5e5a507/Group_32621247-min.png?w=532&h=293&q=90&fm=webp&bg=transparent"
                }
                alt="Confluent Cloud Demo"
                width={400}
                height={400}
                className="h-80 w-full rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 rounded-full p-2 shadow-lg hover:scale-110 transition"
                aria-label="Play Video"
                type="button"
              >
                <PlayCircle className="w-16 h-16 text-white/90" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Autoscaling Clusters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cut Infrastructure Costs in Half With Autoscaling Clusters
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Big savings, powerful automation, and seamless scale. Powered by
            Kora, our cloud-native platform, Confluent Cloud automatically
            scales clusters, balances data, and optimizes resources for you.
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 font-medium mb-10">
            Calculate Cost Savings
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Basic and Standard Clusters",
                desc: "For dev/test and production workloads with elastic scaling and built-in resilience.",
              },
              {
                title: "Enterprise Clusters",
                desc: "Mission-critical, high-throughput, multi-AZ clusters with 99.99% uptime SLA.",
              },
              {
                title: "Freight Clusters",
                desc: "Massive scale, lowest cost per MB, ideal for data lakes and analytics.",
              },
              {
                title: "Multi-Region & Multicloud Clusters",
                desc: "Global data sync, disaster recovery, and hybrid cloud support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 border hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Offload Apache Kafka® Ops for 60% Lower TCO and Faster Dev
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Confluent Cloud automates scaling, balancing, and reduces ops of
              your data streaming platform. Focus on building, not managing
              infrastructure.
            </p>
            <ul className="space-y-6">
              {[
                {
                  icon: Server,
                  title: "Reduced Infrastructure",
                  desc: "Elastically scale clusters and optimize resources automatically.",
                },
                {
                  icon: Code,
                  title: "Lower Dev & Ops Costs",
                  desc: "No more manual Kafka management or costly infra tooling.",
                },
                {
                  icon: Shield,
                  title: "Minimized Downtime",
                  desc: "Multi-AZ clusters and 99.99% uptime SLA.",
                },
                {
                  icon: Headphones,
                  title: "Expert Support",
                  desc: "Committer-led support with 1M+ hours of Kafka expertise.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="bg-blue-600 text-white rounded-full p-2">
                    <item.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/globe.svg"
              alt="Cloud Savings"
              width={320}
              height={320}
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Customer Success Stories Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See Why Leading Brands Trust Confluent Cloud
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            From global banks to top retailers, organizations of all sizes rely
            on Confluent Cloud to power mission-critical data streaming at
            scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRc3CTxUYHNN3iXh2-b5GQOPghUq7SCquATA&s",
                logoAlt: "Citizens Bank",
                title: (
                  <>
                    Citizens Bank Cuts IT Costs and
                    <br className="hidden md:inline" /> Saves $1M Annually
                  </>
                ),
                desc: "Citizens Bank captures real-time change data across the organization. See how choosing Confluent Cloud helped cut its IT costs and improve data processing speeds by 50%.",
                links: [{ label: "Learn More", href: "#" }],
              },
              {
                logo: "https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvY29udGFjdF9pbWFnZXMvNTc4ODY1MTQtODU2MC00MDUwLTk3MWItZDljODUxYTFkNjA1L0JpZ0NvbW1lcmNlLWxvZ28tZGFyay5wbmciLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6IndlYnAiLCJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6NjAwLCJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MH19fX0=",
                logoAlt: "BigCommerce",
                title: (
                  <>
                    Confluent Saves BigCommerce
                    <br className="hidden md:inline" /> Saves 20+ Hours a Week
                  </>
                ),
                desc: "Hear how BigCommerce uses Confluent Cloud to automate maintenance and elastically scale for Black Friday traffic on Google Cloud.",
                links: [{ label: "Watch Webinar", href: "#" }],
              },
              {
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zLJu2zsIXc9zYbTeh4ZyHSzvzHr7bY8omQ&s",
                logoAlt: "Victoria's Secret",
                title: (
                  <>
                    Victoria’s Secret Accelerates
                    <br className="hidden md:inline" /> Business Decisions With
                    Confluent
                  </>
                ),
                desc: "Learn how adopting Confluent Cloud allowed Victoria’s Secret to increase operational efficiency with real-time analytics for faster decision-making.",
                links: [{ label: "Learn More", href: "#" }],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border shadow p-8 flex flex-col items-start transition-transform duration-200 hover:shadow-2xl hover:scale-[1.03] group"
              >
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  width={160}
                  height={40}
                  className="h-10 w-auto object-contain mb-6 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-base font-semibold text-blue-900 mb-2 leading-snug group-hover:text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1 text-sm">{item.desc}</p>
                <div className="flex flex-wrap gap-4">
                  {item.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="text-blue-700 font-medium text-sm hover:underline flex items-center gap-1"
                    >
                      {link.label} <ArrowRight className="w-4 h-4 inline" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Capabilities for Enterprise Security & Modern Data
            Architecture
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Get a comprehensive set of capabilities, a complete data streaming
            platform made for modern security, compliance, global operations,
            pipeline development, governance, and more.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 font-medium">
              Book Demo
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-700 hover:bg-blue-50 px-6 py-3 font-medium"
            >
              See Data Sheet
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ensure Regulatory Compliance With Robust Security",
                desc: "Meet the strictest security and compliance requirements with built-in encryption, access controls, and audit logging.",
                link: "#",
              },
              {
                title:
                  "Easily Integrate Data Systems With Fully Managed Connectors",
                desc: "Choose from 120+ pre-built connectors to integrate with your favorite databases, SaaS, and cloud services.",
                link: "#",
              },
              {
                title:
                  "Govern Data as Product at the Source for Downstream Teams",
                desc: "Empower teams to discover, share, and trust data with integrated governance and cataloging.",
                link: "#",
              },
              {
                title: "Use Transform to Turn Data Streams Into Analytics",
                desc: "Real-time stream processing and transformation for analytics, ML, and operational use cases.",
                link: "#",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow p-6 border hover:shadow-lg transition flex flex-col"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 flex-1">{item.desc}</p>
                <a
                  href={item.link}
                  className="mt-4 text-blue-700 font-medium hover:underline"
                >
                  Learn more &rarr;
                </a>
              </div>
            ))}
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

      {/* Hybrid Environments Feature */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unify Your Data Across Global, Hybrid Environments
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Use the data streaming platform wherever your data lives—fully
              managed in the cloud, on-premises, or hybrid. Confluent Cloud and
              Confluent Platform work together to provide seamless data
              movement, governance, and analytics across all your environments.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Link data between public clouds and on-premises systems</li>
              <li>Unified security, monitoring, and governance</li>
              <li>Low-latency, high-throughput streaming at global scale</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 font-medium">
                Try Hybrid Demo
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-700 hover:bg-blue-50 px-6 py-3 font-medium"
              >
                Take a Course
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Replace with your own illustration or SVG */}
            <Image
              src="https://images.ctfassets.net/8vofjvai1hpv/zslJNl07yTVulLeEhvqNF/5e669fef46dcebd2d136a59864a8eaf1/Integrate_Confluent_across_environments__2_.svg"
              alt="Hybrid Cloud Illustration"
              width={340}
              height={220}
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Cloud Product & Feature Deep Dives */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Cloud Product & Feature Deep Dives
            </h2>
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700">
              {/* Info icon */}
              <svg width="18" height="18" fill="none">
                <circle cx="9" cy="9" r="9" fill="#3B82F6" />
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="12"
                  fontWeight="bold"
                  dy=".3em"
                >
                  i
                </text>
              </svg>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Unlock Cost Savings with Freight Clusters",
                desc: "Learn how to optimize your streaming workloads for scale and cost efficiency.",
                link: "#",
              },
              {
                title:
                  "Bringing Together the Best of Batch and Stream Processing",
                desc: "See how Confluent enables seamless analytics across real-time and historical data.",
                link: "#",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border shadow p-6 flex flex-col transition-transform duration-200 hover:shadow-2xl hover:scale-[1.03] group"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-1 text-sm">{item.desc}</p>
                <a
                  href={item.link}
                  className="text-blue-700 font-medium text-sm hover:underline flex items-center gap-1"
                >
                  Learn more <ArrowRight className="w-4 h-4 inline" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              It’s Free & Easy to Get Started
            </h2>
            <p className="text-blue-100 mb-6">
              Get a head start on your Kafka and data use cases. Create and
              activate your Confluent Cloud account today with $400 in free
              credits. Spark up your first 60 days.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
              <div className="flex gap-2 mb-6">
                <Button className="flex-1" variant="default">
                  Cloud
                </Button>
                <Button className="flex-1" variant="outline">
                  Self Managed
                </Button>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Confluent Cloud
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  A fully managed, cloud-native service for Apache Kafka®
                </p>
              </div>
              <Button className="w-full mb-4 bg-gray-900 text-white hover:bg-gray-800">
                <span className="flex items-center gap-2">
                  <svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#4285F4" />
                    <text
                      x="50%"
                      y="60%"
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="12"
                      fontWeight="bold"
                      dy=".3em"
                    >
                      G
                    </text>
                  </svg>
                  Sign in with Google
                </span>
              </Button>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="">Position</option>
                  <option value="developer">Developer</option>
                  <option value="architect">Architect</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I want to get product emails, events & news from Confluent
                  </label>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Get Started
                </Button>
              </form>
              <div className="mt-4 text-xs text-gray-400">
                By clicking &quot;Get Started&quot;, you agree to the{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Confluent Cloud FAQs
          </h2>
          <div className="bg-gray-50 rounded-xl shadow-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Confluent Cloud?</AccordionTrigger>
                <AccordionContent>
                  Confluent Cloud is a fully managed, cloud-native service for
                  Apache Kafka®, providing seamless data streaming, scalability,
                  and enterprise-grade security.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How is Confluent Cloud different from open source Kafka?
                </AccordionTrigger>
                <AccordionContent>
                  Confluent Cloud offers automated operations, elastic
                  scalability, built-in connectors, and 24/7 support—removing
                  the operational burden of self-managing Kafka.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What features does Confluent Cloud include?
                </AccordionTrigger>
                <AccordionContent>
                  Features include stream governance, ksqlDB, connectors,
                  multi-region clusters, security, and more—all fully managed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How does Confluent Cloud pricing work?
                </AccordionTrigger>
                <AccordionContent>
                  Pricing is pay-as-you-go, based on usage. You only pay for
                  what you stream, store, and process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
