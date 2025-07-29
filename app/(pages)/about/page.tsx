"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      number: "80%",
      label: "Of Fortune 100 companies",
      description: "trust Confluent for their data streaming needs",
    },
    {
      number: "3T+",
      label: "Messages per day",
      description: "processed through our platform globally",
    },
    {
      number: "4000+",
      label: "Customers worldwide",
      description: "across every industry and use case",
    },
    {
      number: "99.99%",
      label: "Uptime SLA",
      description: "with built-in redundancy and reliability",
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Founded by Kafka Creators",
      description:
        "Jay Kreps, Neha Narkhede, and Jun Rao founded Confluent to bring Apache Kafka to the enterprise.",
    },
    {
      year: "2016",
      title: "Series B Funding",
      description:
        "Raised $24M to accelerate product development and market expansion.",
    },
    {
      year: "2019",
      title: "Confluent Cloud Launch",
      description:
        "Launched our fully managed cloud service, making Kafka accessible to everyone.",
    },
    {
      year: "2021",
      title: "Public Company",
      description:
        "Went public on NASDAQ, validating the data streaming market opportunity.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description:
        "Launched AI-powered features to help developers build smarter data pipelines.",
    },
  ];

  const team = [
    {
      name: "Jay Kreps",
      role: "Co-founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Neha Narkhede",
      role: "Co-founder & CTO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Jun Rao",
      role: "Co-founder & Principal Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description:
        "We put our customers at the center of everything we do, building products that solve real problems.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "We push the boundaries of what's possible with data streaming and real-time analytics.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in our products, services, and customer relationships.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "We're building technology that transforms how organizations around the world use data.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
 

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About Confluent</h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              We&apos;re the company behind Apache Kafka, building the world&apos;s
              leading data streaming platform to help organizations harness the
              power of real-time data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                To set data in motion and help every organization become a
                real-time, data-driven enterprise.
              </p>
              <p className="text-gray-600 mb-8">
                We believe that data should flow freely across an organization,
                enabling teams to build applications that react to events as
                they happen, not hours or days later. Our platform makes it easy
                to connect, process, and share data in real-time, at any scale.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From Apache Kafka creators to data streaming leaders
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <Card
                    className={`w-full max-w-md ${
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    } shadow-lg`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {item.year.slice(-2)}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the visionaries behind Confluent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <Image
                    height={200}
                    width={200}
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the team that&apos;s transforming how the world thinks about
            data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg">
              View Careers <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
