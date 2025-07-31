/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import { 
  Download, 
  CheckCircle, 
  ArrowRight, 
  BookOpen, 
  Users, 
  Clock,
  Mail,
  User,
  Building,
  Phone,
  Globe,
  Zap,
  Database,
  Network,
  Code,
  Shield,
  Cpu
} from 'lucide-react';

export default function EventDrivenMicroservicesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    country: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Scalable Architecture Patterns",
      description: "Learn proven patterns for building resilient, scalable microservices that can handle enterprise-level traffic"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Event Processing",
      description: "Master event streaming, CQRS, and event sourcing to build responsive, real-time applications"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Consistency Strategies",
      description: "Implement saga patterns and distributed transaction management for reliable data consistency"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Monitoring",
      description: "Build secure, observable microservices with comprehensive monitoring and tracing capabilities"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Practical Implementation",
      description: "Get hands-on experience with modern tools, frameworks, and deployment strategies"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Learn advanced techniques for optimizing performance and reducing latency in distributed systems"
    }
  ];

  const keyTopics = [
    "Event-driven architecture fundamentals and best practices",
    "Microservices communication patterns and protocols",
    "Implementing CQRS and Event Sourcing patterns",
    "Building resilient systems with circuit breakers and bulkheads",
    "Advanced deployment strategies and containerization",
    "Monitoring, observability, and distributed tracing",
    "Security patterns for microservices architectures",
    "Performance tuning and scalability optimization"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">TechCorp</span>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                  <BookOpen className="w-4 h-4 text-blue-300 mr-2" />
                  <span className="text-blue-200 text-sm font-medium">Free Technical eBook</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Building Event-Driven 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                    Microservices, 2E
                  </span>
                </h1>

                <h2 className="text-xl lg:text-2xl text-blue-200 font-medium">
                  Leveraging Organizational Data at Scale
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                  Master the art of building resilient, scalable microservices with event-driven architecture. 
                  This comprehensive guide covers modern patterns, tools, and best practices for enterprise-scale systems.
                </p>

                {/* Key Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-8">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1">{benefit.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Topics */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">What You ll Learn:</h3>
                  <div className="grid gap-2">
                    {keyTopics.slice(0, 4).map((topic, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:max-w-md mx-auto w-full">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get the eBook</h3>
                  <p className="text-gray-600">Download your free copy and start building better microservices today</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600 mb-4">Your download link has been sent to your email.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Download Another Copy
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Business Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                          required
                        >
                          <option value="">Country</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="AU">Australia</option>
                          <option value="JP">Japan</option>
                          <option value="SG">Singapore</option>
                          <option value="IN">India</option>
                          <option value="BR">Brazil</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Free eBook</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      By downloading this eBook, you agree to receive marketing communications from TechCorp. 
                      You can unsubscribe at any time. View our{' '}
                      <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why This eBook is Essential for Modern Developers
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Get comprehensive insights into building robust, scalable microservices that can handle enterprise-level demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 6).map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Topics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Complete Learning Path
              </h2>
              <p className="text-blue-200 text-lg">
                Everything you need to master event-driven microservices architecture
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyTopics.map((topic, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-200 leading-relaxed">{topic}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-2 text-blue-200">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">250+ Pages</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Expert Authors</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <Code className="w-5 h-5" />
                  <span className="font-medium">Code Examples</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Architecture?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have already downloaded this comprehensive guide to building modern, scalable microservices.
          </p>
          <button
            onClick={() => {
              const form = document.querySelector('form');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Download className="w-6 h-6" />
            <span>Get Your Free Copy Now</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
}
