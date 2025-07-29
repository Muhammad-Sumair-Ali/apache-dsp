"use client"
import { Check, Star, ArrowRight, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started with data streaming",
      features: [
        "Up to 3 Kafka topics",
        "1 MB/s throughput",
        "1 day data retention",
        "Basic connectors",
        "Community support",
        "Single availability zone"
      ],
      limitations: [
        "Limited to 1 environment",
        "No enterprise features"
      ],
      cta: "Start Free",
      popular: false,
      gradient: "from-gray-50 to-gray-100"
    },
    {
      name: "Standard",
      price: "$99",
      period: "/month",
      description: "Great for production workloads and growing teams",
      features: [
        "Unlimited Kafka topics",
        "Up to 100 MB/s throughput",
        "30 days data retention",
        "120+ pre-built connectors",
        "24/7 support",
        "Multi-AZ deployment",
        "Schema Registry",
        "ksqlDB",
        "Monitoring & alerting"
      ],
      limitations: [],
      cta: "Start Free Trial",
      popular: true,
      gradient: "from-blue-50 to-purple-50"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale deployments with advanced requirements",
      features: [
        "Unlimited everything",
        "Dedicated clusters",
        "Custom data retention",
        "All connectors & features",
        "Priority support",
        "Global multi-region",
        "Advanced security",
        "Custom SLAs",
        "Professional services",
        "Dedicated success manager"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-50 to-blue-50"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-millisecond latency with guaranteed performance"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption and compliance ready"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy anywhere with multi-cloud support"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
  
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no vendor lock-in. 
            Pay only for what you use with our flexible pricing model.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>$400 in free credits</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-400 mr-2" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'shadow-lg'} border-0 overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardContent className={`p-8 bg-gradient-to-br ${plan.gradient} h-full flex flex-col ${plan.popular ? 'pt-16' : ''}`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                    </div>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-500 mb-2">Limitations:</h4>
                        <ul className="space-y-1">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="text-sm text-gray-500">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Button 
                    className={`w-full py-3 font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                        : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Confluent?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the most advanced data streaming platform with enterprise-grade features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does the free tier work?</h3>
                <p className="text-gray-600">
                  You get $400 in free credits when you sign up, which typically lasts 30+ days for most use cases. 
                  No credit card required to start.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans anytime?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and you&apos;ll only pay for what you use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s included in support?</h3>
                <p className="text-gray-600">
                  All paid plans include 24/7 support from our team of Apache Kafka experts. Enterprise customers 
                  get priority support and a dedicated success manager.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer volume discounts?</h3>
                <p className="text-gray-600">
                  Yes, we offer custom pricing for large deployments. Contact our sales team to discuss 
                  your specific requirements and get a tailored quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already using Confluent to power their real-time data needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}