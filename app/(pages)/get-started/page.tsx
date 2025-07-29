"use client"

import { useState } from "react";
import {  Server, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function GetStarted() {
  const [deploymentType, setDeploymentType] = useState("CLOUD");
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    country: "Pakistan"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const features = [
    {
      title: "Stream",
      description: "Reimagine Apache Kafka, the de facto standard for data streaming, everywhere - on-prem, in every major public cloud and on the edge."
    },
    {
      title: "Connect", 
      description: "Easily on-ramp and off-ramp data, converting even your static data into a network of event streams, with a rich connector ecosystem."
    },
    {
      title: "Process",
      description: "Perform stateful and stateless processing, powered by Apache Flink®, the de facto industry standard for stream processing."
    },
    {
      title: "Govern",
      description: "Make data in motion self-service, secure, compliant and trusted with the industry's only data streaming governance suite."
    }
  ];

  const cloudProviders = [
    { name: "Microsoft Azure", logo: "🔷" },
    { name: "AWS Marketplace", logo: "🟧" },
    { name: "Google Cloud", logo: "🔴" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-8 leading-tight">
              Get started with Confluent, for free
            </h1>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Ready? New signups receive $400 to spend during their first 30 days.
              </h2>
              <p className="text-blue-100 leading-relaxed">
                With Confluent&apos;s cloud-native and complete data streaming platform, 
                you can take the following to the next level.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full border-2 border-blue-300 flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}:</h3>
                    <p className="text-blue-100 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cloud Marketplace */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Use your cloud marketplace account to get started with Confluent Cloud:
              </h3>
              <div className="flex flex-wrap gap-4">
                {cloudProviders.map((provider, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 cursor-pointer hover:bg-white/20 transition-colors">
                    <span className="text-2xl">{provider.logo}</span>
                    <span className="text-white font-medium">{provider.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full"></div>
            
            <Card className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10">
              <CardContent className="p-0">
                {/* Deployment Type Selector */}
                <div className="bg-gray-50 p-1 m-6 rounded-lg flex">
                  <button
                    onClick={() => setDeploymentType("CLOUD")}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-colors ${
                      deploymentType === "CLOUD"
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    CLOUD
                  </button>
                  <button
                    onClick={() => setDeploymentType("SELF-MANAGED")}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-colors ${
                      deploymentType === "SELF-MANAGED"
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    SELF-MANAGED
                  </button>
                </div>

                <div className="px-6 pb-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {deploymentType === "CLOUD" ? "Confluent Cloud" : "Self-Managed"}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {deploymentType === "CLOUD" 
                        ? "A fully managed, cloud-native service for Apache Kafka®"
                        : "Deploy and manage Confluent Platform yourself"
                      }
                    </p>
                  </div>

                  {deploymentType === "CLOUD" && (
                    <>
                      {/* Social Login Options */}
                      <div className="space-y-3 mb-6">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-semibold">
                          <span className="mr-2">G</span> Sign In With Google
                        </Button>
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-semibold">
                          <span className="mr-2">🐙</span> Sign In With GitHub
                        </Button>
                      </div>

                      <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">OR</span>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <form className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="text"
                            placeholder="Company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div className="relative">
                          <select 
                            value={formData.country}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                          >
                            <option value="Pakistan">Pakistan</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                            <option value="France">France</option>
                            <option value="Japan">Japan</option>
                            <option value="India">India</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        </div>

                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="email-updates"
                            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="email-updates" className="text-sm text-gray-600">
                            Email me about products, services & events from Confluent
                          </label>
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold text-lg rounded-lg">
                          Start Free
                        </Button>
                      </form>

                      <div className="text-center mt-6">
                        <p className="text-sm text-gray-600 mb-4">
                          I have an account, <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">Log In</Link>
                        </p>
                        
                        <p className="text-xs text-gray-500">
                          By clicking {"START FREE"} above, you agree to the{" "}
                          <Link href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>{" "}
                          and <Link href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>.
                        </p>
                      </div>
                    </>
                  )}

                  {deploymentType === "SELF-MANAGED" && (
                    <div className="text-center py-12">
                      <Server className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Deploy Confluent Platform
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Download and deploy Confluent Platform in your own environment 
                        with full control over your infrastructure.
                      </p>
                      <div className="space-y-4">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold">
                          Download Confluent Platform
                        </Button>
                        <Button variant="outline" className="w-full py-3 font-semibold">
                          View Documentation
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  );
}