"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  Shield,
  BarChart3,
  Tag,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const ProfessionalServicesPage = () => {
  const benefits = [
    {
      icon: Star,
      title: "Experience",
      description:
        "Over 5 years of experience with 500+ successful projects completed across various industries.",
    },
    {
      icon: Clock,
      title: "Quality & Confidence",
      description:
        "Dedicated support and guaranteed quality with 24/7 customer service and satisfaction guarantee.",
    },
    {
      icon: Shield,
      title: "Accountability",
      description:
        "Full transparency and accountability throughout the project lifecycle with regular updates and reporting.",
    },
    {
      icon: BarChart3,
      title: "Scale",
      description:
        "Scalable solutions that grow with your business needs, from startups to enterprise-level organizations.",
    },
  ];

  const newFeatures = [
    {
      icon: Tag,
      title: "Data-to-Market Journey Simulation",
      description:
        "Accelerate your market entry with our comprehensive simulation tools that model real-world scenarios and optimize your go-to-market strategy.",
      link: "Learn More",
    },
    {
      icon: Users,
      title: "Professional Services Technical Architect",
      description:
        "Get expert technical guidance with our dedicated architects who design scalable solutions tailored to your specific business requirements.",
      link: "Learn More",
    },
  ];

  const offerings = [
    {
      number: "1",
      title: "Lead Kafka",
      description: "Enterprise-grade data streaming solutions",
      color: "bg-cyan-100 text-cyan-700",
      features: [
        "Real-time data processing",
        "Scalable architecture design",
        "24/7 monitoring and support",
        "Custom integration solutions",
      ],
    },
    {
      number: "2",
      title: "Go-to production",
      description: "End-to-end production deployment services",
      color: "bg-blue-100 text-blue-700",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure automation",
        "Performance optimization",
        "Security compliance",
      ],
    },
    {
      number: "3",
      title: "Attend a dedicated event",
      description: "Exclusive industry events and workshops",
      color: "bg-sky-100 text-sky-700",
      features: [
        "Expert-led workshops",
        "Networking opportunities",
        "Latest industry insights",
        "Hands-on training sessions",
      ],
    },
    {
      number: "4",
      title: "Book Sales",
      description: "Sales optimization and strategy services",
      color: "bg-cyan-200 text-cyan-800",
      features: [
        "Sales funnel optimization",
        "CRM integration",
        "Performance analytics",
        "Team training programs",
      ],
    },
    {
      number: "5",
      title: "All-one package",
      description: "Comprehensive business solution package",
      color: "bg-blue-200 text-blue-800",
      features: [
        "Full-stack development",
        "Cloud infrastructure",
        "Ongoing maintenance",
        "Strategic consulting",
      ],
    },
  ];

  const serviceCategories = [
    {
      title: "Subscription Services",
      services: [
        "Monthly consulting retainer",
        "Dedicated support team",
        "Priority access to resources",
        "Regular health checks",
        "Strategic planning sessions",
      ],
    },
    {
      title: "Foundation Services",
      services: [
        "System architecture design",
        "Technology stack selection",
        "Best practices implementation",
        "Documentation creation",
        "Team training programs",
      ],
    },
    {
      title: "Accelerator Services",
      services: [
        "Rapid prototyping",
        "MVP development",
        "Market validation",
        "Go-to-market strategy",
        "Performance optimization",
      ],
    },
    {
      title: "Enabler Support Services",
      services: [
        "24/7 technical support",
        "Infrastructure monitoring",
        "Security assessments",
        "Compliance auditing",
        "Disaster recovery planning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Work with our experts to accelerate your Confluent and platform
              and realize your business goals faster.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Professional Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits of working with Confluent Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accelerating ROI in Mission-Critical use Cases across Industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* What's New Section */}
      <div className="bg-white/60 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What&apos;s new with Confluent Professional Services
            </h2>
            <p className="text-lg text-gray-600">
              Discover our latest innovations and service offerings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {newFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 px-3 py-1"
                    >
                      New
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold"
                  >
                    {feature.link}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Offerings</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the service that best fits your needs, from individual
            consulting sessions to comprehensive enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              <CardHeader className="pb-4">
                <div
                  className={`mx-auto w-12 h-12 ${offering.color} rounded-xl flex items-center justify-center mb-4 font-bold text-2xl shadow-lg`}
                >
                  {offering.number}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {offering.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {offering.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-slate-50"
            >
              <CardHeader className="pb-4 border-b border-gray-100">
                <CardTitle className="text-lg font-bold text-gray-900 text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Get Started & Education Services Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Get Started Section */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Get Started with Confluent Professional Services
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ready to unlock your streaming data potential? Our
                  Professional Services team will guide you through every step
                  of your Confluent journey, from initial planning to production
                  deployment.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Initial assessment and strategy planning
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Custom implementation roadmap
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Dedicated technical expertise
                    </span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Education Services Section */}
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Confluent Education Services
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Empower your team with comprehensive training programs
                  designed to build Apache Kafka and Confluent expertise across
                  your organization. From fundamentals to advanced concepts.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Hands-on training workshops
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Certification preparation courses
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Custom curriculum development
                    </span>
                  </li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <Image
                  width={250}
                  height={250}
                  src="https://images.ctfassets.net/8vofjvai1hpv/55WnpAZYZPm2keNoWVs8nw/2ce8fc6688e8d2635d6d52ea755f3c3b/buildings.jpg?w=468&h=351&q=100&fm=webp&bg=transparent"
                  alt="Modern building architecture"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="bg-blue-100 text-blue-700 mb-4">
                Case Study
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Technology Leadership Enabling Digital Transformation in the
                Home Mortgage Industry
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                Discover how a leading mortgage company leveraged Confluent
                Professional Services to modernize their data infrastructure,
                enabling real-time decision making and improving customer
                experience across their entire loan origination process.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">
                    40% faster processing
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">99.9% uptime</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">
                    $2M saved annually
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-blue-500/20 text-white hover:bg-white hover:text-gray-900 font-semibold"
              >
                Read Full Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Working with Partners Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Working with Confluent Partners
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Our Global Professional Services is focused on providing you the
            expert guidance and tools to get the maximum value out of your
            Confluent Platform investment. By leveraging our partnerships and
            broad ecosystem, we make sure you succeed.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Find a Partner
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive library of resources to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Datasheets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Detailed technical specifications and service overviews
                </p>
                <Button
                  variant="outline"
                  className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  View All
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Presentations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Executive briefings and technical deep-dive presentations
                </p>
                <Button
                  variant="outline"
                  className="w-full border-green-300 text-green-600 hover:bg-green-50"
                >
                  View All
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Whitepapers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  In-depth analysis and industry best practices documentation
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  View All
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Case Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Real-world success stories and implementation examples
                </p>
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                >
                  View All
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to accelerate your success?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get started with our professional services and transform your
            business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Professional Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white bg-blue-500/20 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServicesPage;
