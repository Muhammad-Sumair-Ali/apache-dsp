"use client"
import { Check, ArrowRight, BarChart3, Shield, Zap, Database, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ConfluentPricing() {
  const [showFAQ, setShowFAQ] = useState<number | null>(null);

  const pricingPlans = [
    {
      name: "Basic",
      price: "$0/Month",
      description: "Start learning and building your first streaming apps",
      features: [
        "Apache Kafka powered by Kora",
        "Up to 30 days data retention",
        "Pay-as-you-go pricing",
        "Basic monitoring and alerting",
        "Community support",
        "REST Proxy included",
        "Schema Registry included"
      ],
      ctaText: "Start for free",
      ctaPrimary: false,
      popular: false
    },
    {
      name: "Standard", 
      price: "$15/Month",
      description: "Purpose-built for production workloads",
      features: [
        "Everything in Basic",
        "99.95% uptime SLA",
        "VPC peering and transit gateway",
        "Private networking",
        "Advanced monitoring with Confluent Control Center",
        "24x7 support",
        "Multi-region clusters",
        "Kafka Connect fully managed",
        "ksqlDB fully managed"
      ],
      ctaText: "Everything in Basic",
      ctaPrimary: true,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$15/Month",
      description: "Advanced capabilities with enterprise-grade governance",
      features: [
        "Everything in Standard",
        "99.99% uptime SLA",
        "Advanced security and compliance",
        "Multi-cloud and hybrid deployments",
        "Schema governance and data lineage",
        "Role-based access control",
        "Audit logs and compliance",
        "Custom networking options",
        "Premium support with SLA"
      ],
      ctaText: "Everything in Standard",
      ctaPrimary: false,
      popular: false
    }
  ];

  const specialtyOptions = [
    {
      title: "Dedicated",
      description: "Single-tenant Kafka clusters with elastic networking and enterprise-grade requirements",
      savings: "90%",
      savingsText: "typical",
      features: ["Dedicated infrastructure", "Custom networking", "Enhanced security"],
      cta: "Learn more"
    },
    {
      title: "Freight",
      description: "Move your existing data models from on-premises Kafka and other data systems",
      savings: "Save up to 90%", 
      savingsText: "on migration costs",
      features: ["Migration assistance", "Data pipeline optimization", "Expert guidance"],
      cta: "Get migration help"
    }
  ];

  const faqs = [
    {
      question: "What are Elastic CKUs (eCKUs) and why are they important?",
      answer: "Elastic Confluent Kafka Units (eCKUs) are our compute units that scale automatically based on your throughput needs. They ensure you only pay for what you use while maintaining consistent performance."
    },
    {
      question: "How is my monthly bill calculated?",
      answer: "Your bill is calculated based on the CKUs consumed, data retention, and any additional features like connectors or ksqlDB queries. We provide detailed usage analytics in your dashboard."
    },
    {
      question: "How can I get Confluent discounts?",
      answer: "We offer volume discounts for annual commitments, startup credits for qualified companies, and special pricing for educational institutions. Contact our sales team for custom pricing."
    },
    {
      question: "What are annual commitments?",
      answer: "Annual commitments provide significant discounts in exchange for a 12-month usage commitment. This helps you save costs while ensuring predictable billing."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4 block">
                Confluent Pricing
              </span>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Designed to scale. Priced to match.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Serverless, elastic, consumption-based pricing with your workloads in mind. No overprovisioning, manage capacity, or pay for idle resources on day one. You only pay for what you use, when you use it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold text-lg">
                  Start your trial
                </Button>
                <Button variant="outline" className="px-8 py-4 font-semibold text-lg">
                  View free tier <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gray-900 text-white p-6 rounded-2xl">
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Real-time Usage Tracking</div>
                  <div className="text-2xl font-bold">$342.18</div>
                  <div className="text-sm text-gray-400">Current month estimate</div>
                </div>
                
                {/* Mock chart */}
                <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-end justify-between p-4 mb-4">
                  <div className="w-4 bg-white/30 rounded-t h-8"></div>
                  <div className="w-4 bg-white/50 rounded-t h-12"></div>
                  <div className="w-4 bg-white/70 rounded-t h-20"></div>
                  <div className="w-4 bg-white rounded-t h-16"></div>
                  <div className="w-4 bg-white/80 rounded-t h-24"></div>
                  <div className="w-4 bg-white/60 rounded-t h-14"></div>
                  <div className="w-4 bg-white/90 rounded-t h-28"></div>
                </div>
                
                <div className="text-sm text-gray-400">
                  Pay-as-you-scale pricing with no upfront costs
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 font-semibold">
              CONFLUENT CLOUD
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700 font-semibold">
              CONFLUENT PLATFORM
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700 font-semibold">
              MARKETPLACE BYOC
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">Stream</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">Connect</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">Process</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">Govern</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">General Purpose Clusters</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-600' : ''} hover:shadow-lg transition-shadow`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full py-3 font-semibold ${
                      plan.ctaPrimary 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {plan.ctaText}
                  </Button>

                  <div className="mt-4 text-center">
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Estimate your cost <ArrowRight className="inline ml-1 h-3 w-3" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Clusters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialty Clusters</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialtyOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{option.savings}</div>
                      <div className="text-sm text-gray-500">{option.savingsText}</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">
                    {option.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <button
                    onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                      showFAQ === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {showFAQ === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}