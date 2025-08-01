"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your data streaming? Our experts are here to help
            you build the future of real-time data.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg">
                  Whether you&apos;re exploring data streaming for the first
                  time or scaling an existing implementation, we&apos;re here to
                  guide you every step of the way.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-600 bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Email Us
                        </h3>
                        <p className="text-gray-600">sales@confluent.io</p>
                        <p className="text-gray-600">support@confluent.io</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-600 bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Call Us
                        </h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-500">
                          Mon-Fri 9AM-6PM PST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600 bg-gradient-to-r from-green-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Visit Us
                        </h3>
                        <p className="text-gray-600">899 W Evelyn Ave</p>
                        <p className="text-gray-600">Mountain View, CA 94041</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 bg-white">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Send us a Message
                    </h3>
                    <p className="text-gray-600">
                      Fill out the form below and we&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Software Engineer"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select your country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="AU">Australia</option>
                        <option value="JP">Japan</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your data streaming needs..."
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">* Required fields</p>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center"
                      >
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    

      {/* Community & Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Image
                  width={30}
                  height={30}
                  src="https://images.ctfassets.net/8vofjvai1hpv/3HgzSgq9bvdKhuW4pSPz03/c2f337a6a591c5a95a9530886cd719e4/icon-slack-color.svg"
                  alt="Slack"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-blue-900">
                Community Slack
              </h3>
              <p className="text-gray-600 mb-4">
                Collaborate and get answers to your Apache Kafka and Confluent
                Platform questions.
              </p>
              <a
                href="#"
                className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Join Now
              </a>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Image
                  width={30}
                  height={30}
                  src="https://images.ctfassets.net/8vofjvai1hpv/5ajzSftV3z9KUcYGDOsBBg/c63494b34f65d260e1841d42b9ec7607/icon-symbol-blue.svg"
                  alt="Developer"
                  className="h-8 w-8"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-blue-900">
                Confluent Developer
              </h3>
              <p className="text-gray-600 mb-4">
                Your Apache Kafka® journey begins here.
              </p>
              <a
                href="#"
                className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Learn More
              </a>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <BookOpen />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-blue-900">
                Confluent Blog
              </h3>
              <p className="text-gray-600 mb-4">
                Get product updates, use cases, product updates and more.
              </p>
              <a
                href="#"
                className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                Read Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                Mountain View (HQ)
              </h4>
              <p className="text-gray-700">
                899 West Evelyn Ave
                <br />
                Mountain View, CA 94041
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Reston</h4>
              <p className="text-gray-700">
                Regus Center
                <br />
                1761 Preston White Dr, Suite 100
                <br />
                Reston, VA 20191
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">London</h4>
              <p className="text-gray-700">
                The Bower, 207-211 Old Street
                <br />
                London, EC1V 9NR
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Dubai</h4>
              <p className="text-gray-700">
                Al Fattan Currency House, DIFC
                <br />
                Dubai, United Arab Emirates
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Barcelona</h4>
              <p className="text-gray-700">
                Calle Consell de Cent, 334
                <br />
                08007 Barcelona, Spain
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Bangalore</h4>
              <p className="text-gray-700">
                5th Floor, Bikaner Tower, 8th Main, 4th Block, Koramangala,
                Karnataka 560034
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Singapore</h4>
              <p className="text-gray-700">
                80 Robinson Road, #02-00
                <br />
                Singapore 068898
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Tokyo</h4>
              <p className="text-gray-700">
                2 Chome-11-3 Nagatacho, Chiyoda City
                <br />
                Tokyo 100-0014, Japan
              </p>
            </div>
          </div>
        </div>
      </section>


        {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and experience the power of real-time
            data streaming.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
