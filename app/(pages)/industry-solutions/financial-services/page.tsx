"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Play,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  BarChart3,
  Lock,
  Globe,
} from "lucide-react";
import Link from "next/link";
import {
  ShieldCheck,
  Banknote,
  BarChart,
  Cpu,
  Activity,
  DatabaseZap,
  AlertCircle,
  LineChart,
  UserCheck,
  CreditCard,
  RefreshCcw,
  Cloud,
} from "lucide-react";

// Types
interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  image: string;
}

interface TrendingItem {
  id: string;
  title: string;
  description: string;
  type: "feature" | "blog" | "case-study";
  readTime: string;
  image: string;
  tags: string[];
}

interface Partner {
  id: string;
  name: string;
  logo: string;
}

interface DataStreamingBenefit {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}

interface CustomerStory {
  id: string;
  company: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  readTime: string;
  backgroundColor: string;
}

// Data objects
const financialSolutions: Solution[] = [
  {
    id: "real-time-payments",
    title: "Real-Time Payments",
    description:
      "Enable instant payment processing and settlement with ultra-low latency streaming architecture.",
    icon: "zap",
    benefits: [
      "Sub-second payment processing",
      "99.99% uptime guarantee",
      "Fraud detection in real-time",
      "Regulatory compliance built-in",
    ],
    image:
      "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "fraud-detection",
    title: "Advanced Fraud Detection",
    description:
      "Protect your customers with AI-powered fraud detection that analyzes patterns in real-time.",
    icon: "shield",
    benefits: [
      "Machine learning algorithms",
      "Pattern recognition",
      "Risk scoring",
      "Automated blocking",
    ],
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "customer-360",
    title: "Customer 360 View",
    description:
      "Create comprehensive customer profiles by streaming data from all touchpoints in real-time.",
    icon: "users",
    benefits: [
      "Unified customer data",
      "Real-time personalization",
      "Cross-channel insights",
      "Improved customer experience",
    ],
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const trendingItems: TrendingItem[] = [
  {
    id: "ultimate-data-streaming-guide",
    title:
      "Complete Use Cases, Industry Stories: The Ultimate Data Streaming Guide",
    description:
      "Comprehensive guide covering real-world data streaming implementations across financial services, including case studies from leading banks.",
    type: "feature",
    readTime: "15 min read",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Data Streaming", "Use Cases", "Best Practices"],
  },
  {
    id: "next-gen-banking",
    title: "Elevate Bank Employee Customer Experience with Intelligent Data",
    description:
      "Learn how modern banks are using real-time data to enhance employee productivity and customer service.",
    type: "blog",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Banking", "Customer Experience", "AI"],
  },
  {
    id: "real-time-innovation",
    title:
      "Real-Banking Innovation: An Assuring AI Investment for APIs and payments",
    description:
      "Discover how AI-powered real-time systems are transforming payment processing and API management.",
    type: "case-study",
    readTime: "12 min read",
    image:
      "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["AI", "Payments", "Innovation"],
  },
  {
    id: "confluent-solution",
    title: "How Confluent Enables the Transformation of FI Financial Serices",
    description:
      "Real-world examples of how Confluent is helping financial institutions modernize their data infrastructure.",
    type: "case-study",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Confluent", "Transformation", "Financial Services"],
  },
];

const partners: Partner[] = [
  {
    id: "citi",
    name: "Citi",
    logo: "https://via.placeholder.com/120x60/1f4e79/ffffff?text=Citi",
  },
  {
    id: "capital-one",
    name: "Capital One",
    logo: "https://via.placeholder.com/120x60/1f4e79/ffffff?text=Capital+One",
  },
  {
    id: "discover",
    name: "Discover",
    logo: "https://via.placeholder.com/120x60/1f4e79/ffffff?text=Discover",
  },
  {
    id: "square",
    name: "Square",
    logo: "https://via.placeholder.com/120x60/1f4e79/ffffff?text=Square",
  },
  {
    id: "jpmorgan",
    name: "JPMorgan Chase",
    logo: "https://via.placeholder.com/120x60/1f4e79/ffffff?text=JPMorgan",
  },
  {
    id: "trust",
    name: "Trust Bank",
    logo: "https://via.placeholder.com/120x60/1f4e79/ffffff?text=Trust",
  },
];

const useCases = [
  "MONEY TRANSFER",
  "RISK DATA STREAMING",
  "CUSTOMER STORIES",
  "PAYMENTS API DATA",
  "CONSUMER EVENTS",
];

// Data Streaming Benefits
const dataStreamingBenefits: DataStreamingBenefit[] = [
  {
    id: "transform-use-cases",
    title: "Transform Your Code Base With Data Projects",
    description:
      "Modernize legacy systems with real-time data streaming capabilities. Enable seamless integration between traditional banking systems and modern cloud-native applications for improved agility and reduced technical debt.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "5 min read",
  },
  {
    id: "financial-services-apis",
    title: "Financial Services APIs Integration with Apache Kafka",
    description:
      "Build robust API ecosystems that can handle millions of transactions per second. Connect all your financial services through standardized APIs with real-time data synchronization across all systems.",
    image:
      "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "8 min read",
  },
  {
    id: "top-5-streaming",
    title: "Top 5 Data Streaming Use Cases in Financial Services",
    description:
      "Discover the most impactful use cases including real-time fraud detection, instant payments, risk management, customer personalization, and regulatory compliance reporting.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600",
    readTime: "6 min read",
  },
  {
    id: "real-time-architecture",
    title:
      "Why You Need Data Streaming: Building a Real-Time Data Architecture",
    description:
      "Learn how to architect systems that process financial data in real-time. From event sourcing to CQRS patterns, build systems that scale with your business needs and regulatory requirements.",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
    readTime: "12 min read",
  },
];

// Customer Stories
const customerStories: CustomerStory[] = [
  {
    id: "capital-one",
    company: "Capital One",
    title: "Capital One's Tips for Achieving Real-Time Customer Experiences",
    description:
      "Discover how Capital One leveraged Apache Kafka and real-time data streaming to transform their customer experience platform, enabling personalized banking services and reducing response times by 90%.",
    image:
      "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: "https://img.freepik.com/free-vector/capital-one-logo_1057-6.jpg?w=120",
    readTime: "8 min read",
    backgroundColor: "bg-blue-600",
  },
  {
    id: "thrivent",
    company: "Thrivent",
    title: "How Data Streaming Enables the Omnichannel Customer Experience",
    description:
      "Learn how Thrivent Financial implemented a comprehensive data streaming architecture to unify customer interactions across all channels, resulting in 40% faster claim processing and improved customer satisfaction.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: "https://img.freepik.com/free-vector/thrivent-logo_1057-6.jpg?w=120",
    readTime: "10 min read",
    backgroundColor: "bg-red-600",
  },
  {
    id: "scotiabank",
    company: "Scotiabank",
    title: "Why Your Cloud Migration and Regulatory Compliance Strategy",
    description:
      "Explore Scotiabank's journey to cloud-native banking infrastructure while maintaining strict regulatory compliance. See how they achieved 99.99% uptime and reduced operational costs by 35%.",
    image:
      "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
    logo: "https://img.freepik.com/free-vector/scotiabank-logo_1057-6.jpg?w=120",
    readTime: "12 min read",
    backgroundColor: "bg-yellow-500",
  },
];
const useCases_Card = [
  {
    icon: <ShieldCheck size={40} className="text-blue-600 mb-4" />,
    title: "Secure Data Exchange for Financial Institutions",
    linkText: "Read Blog",
    linkHref: "#",
  },
  {
    icon: <Banknote size={40} className="text-blue-600 mb-4" />,
    title: "ISO 20022 Compliant Architecture",
    linkText: "Read Blog",
    linkHref: "#",
  },
  {
    icon: <BarChart size={40} className="text-blue-600 mb-4" />,
    title: "Real-time Risk Analysis With Stream Processing",
    linkText: "Read Blog",
    linkHref: "#",
  },
  {
    icon: <Cpu size={40} className="text-blue-600 mb-4" />,
    title: "Data Streaming for Real-Time AI",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Activity size={40} className="text-blue-600 mb-4" />,
    title: "SIEM Optimization",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <DatabaseZap size={40} className="text-blue-600 mb-4" />,
    title: "Core Banking Platform",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <AlertCircle size={40} className="text-blue-600 mb-4" />,
    title: "Fraud Detection",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <LineChart size={40} className="text-blue-600 mb-4" />,
    title: "Real-Time Analytics",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <UserCheck size={40} className="text-blue-600 mb-4" />,
    title: "Hyper Personalized Customer Experiences",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <CreditCard size={40} className="text-blue-600 mb-4" />,
    title: "Real-Time Payments Processing",
    linkText: "Watch Now",
    linkHref: "#",
  },
  {
    icon: <RefreshCcw size={40} className="text-blue-600 mb-4" />,
    title: "Messaging Modernization",
    linkText: "Learn More",
    linkHref: "#",
  },
  {
    icon: <Cloud size={40} className="text-blue-600 mb-4" />,
    title: "Hybrid & Multicloud Data Integration",
    linkText: "Learn More",
    linkHref: "#",
  },
];
export default function FinancialServicesPage() {
  const [activeTab, setActiveTab] = useState("solutions");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "zap":
        return <Zap className="h-8 w-8" />;
      case "shield":
        return <Shield className="h-8 w-8" />;
      case "users":
        return <Users className="h-8 w-8" />;
      default:
        return <BarChart3 className="h-8 w-8" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "feature":
        return <TrendingUp className="h-4 w-4" />;
      case "blog":
        return <BarChart3 className="h-4 w-4" />;
      case "case-study":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-blue-100 text-blue-800";
      case "blog":
        return "bg-green-100 text-green-800";
      case "case-study":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-6 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Reimagine Financial Services for...
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-blue-300 mb-8">
                Real-Time Payments
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Financial services organizations of all sizes are embracing
                real-time data to create seamless digital experiences that
                delight customers while reducing costs and mitigating risks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Get started with Confluent today →
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 text-blue-300 hover:bg-blue-800"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Financial Services Dashboard"
                  width={600}
                  height={400}
                  className="w-full object-cover h-96"
                />
                <div className="absolute inset-0 bg-blue-900/20" />
                <Button
                  size="lg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                >
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Navigation */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((useCase) => (
              <Badge
                key={useCase}
                variant="outline"
                className="px-4 py-2 border-blue-300 text-blue-700 hover:bg-blue-100 cursor-pointer transition-colors"
              >
                {useCase}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-600 text-lg mb-8">
            Trusted by leading financial institutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.id} className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Data Streaming Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Data Streaming?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how data streaming transforms financial services
              operations and customer experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataStreamingBenefits.map((benefit) => (
              <Card
                key={benefit.id}
                className="group hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg"
              >
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {benefit.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {benefit.readTime}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 text-xs p-0 h-auto font-semibold"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Customer Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading financial institutions are transforming their
              operations with data streaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerStories.map((story) => (
              <Card
                key={story.id}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
              >
                <div
                  className={`${story.backgroundColor} p-6 text-white relative`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <Image
                        src={story.logo}
                        alt={`${story.company} logo`}
                        width={80}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      Success Story
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <div className="absolute top-4 right-4 opacity-20">
                    <TrendingUp className="h-12 w-12" />
                  </div>
                </div>

                <div className="p-6">
                  <CardTitle className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-6">
                    {story.description}
                  </CardDescription>

                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {story.readTime}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      Read Story →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              View All Customer Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 mb-12">
              <TabsTrigger value="solutions" className="text-lg">
                Solutions
              </TabsTrigger>
              <TabsTrigger value="trending" className="text-lg">
                What&apos;s Trending
              </TabsTrigger>
              <TabsTrigger value="resources" className="text-lg">
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="solutions" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Financial Services Solutions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover how real-time data streaming transforms financial
                  services operations
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {financialSolutions.map((solution) => (
                  <Card
                    key={solution.id}
                    className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                          {getIcon(solution.icon)}
                        </div>
                        <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                          {solution.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="relative h-48 rounded-lg overflow-hidden">
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Key Benefits:
                          </h4>
                          <ul className="space-y-2">
                            {solution.benefits.map((benefit, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm text-gray-600"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  What&apos;s Trending
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay up-to-date with the latest insights and innovations in
                  financial services
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Featured Article */}
                <div className="lg:col-span-1">
                  <Badge className="mb-4 bg-blue-100 text-blue-800">
                    FEATURE
                  </Badge>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src={trendingItems[0].image}
                        alt={trendingItems[0].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                        {trendingItems[0].title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mb-4">
                        {trendingItems[0].description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {trendingItems[0].readTime}
                        </div>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          Read More →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* More to Explore */}
                <div className="lg:col-span-1">
                  <Badge className="mb-4 bg-green-100 text-green-800">
                    More to Explore
                  </Badge>
                  <div className="space-y-6">
                    {trendingItems.slice(1).map((item) => (
                      <Card
                        key={item.id}
                        className="hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${getTypeColor(
                                    item.type
                                  )}`}
                                >
                                  <span className="flex items-center gap-1">
                                    {getTypeIcon(item.type)}
                                    {item.type.replace("-", " ")}
                                  </span>
                                </Badge>
                                <span className="text-xs text-gray-500">
                                  {item.readTime}
                                </span>
                              </div>
                              <h3 className="font-semibold text-sm mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Resources & Documentation
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get started with comprehensive guides and technical
                  documentation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "API Documentation",
                    icon: <Globe className="h-6 w-6" />,
                    description:
                      "Complete API reference and integration guides",
                  },
                  {
                    title: "Security Guidelines",
                    icon: <Lock className="h-6 w-6" />,
                    description: "Best practices for secure implementation",
                  },
                  {
                    title: "Performance Metrics",
                    icon: <BarChart3 className="h-6 w-6" />,
                    description: "Monitoring and optimization strategies",
                  },
                ].map((resource, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                          {resource.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {resource.title}
                        </CardTitle>
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Unlimited Use Cases for Financial Services
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Whether you need to bring real-time to your payments, risk
            management, or fraud prevention applications, want to extract
            mainframe data to power new services, are looking to drive
            innovative experiences to keep your customers coming back for more,
            build a next-gen data streaming architecture that works with what
            you have today and future-proofs it for where you want to go next.
            The use cases are limitless.
          </p>
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
    </div>
  );
}
