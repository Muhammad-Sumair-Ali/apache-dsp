/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type PlanId = "basic" | "standard" | "enterprise";

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const pricingPlans = [
    {
      name: "Basic",
      price: "Starting at $0/Month",
      description:
        "Start small with no risk. Easily get started with your test cases.",
      features: [
        "Serverless, fully managed clusters with zero ops",
        "Autoscaling Kafka resources",
        "80+ fully managed connectors",
        "Security and governance essentials",
        "Multicloud across AWS, Azure, and GCP",
      ],
      ctaText: "Get started free",
      ctaPrimary: false,
      popular: false,
      estimateLink: "#",
      planId: "basic",
      priceId: "price_1Rr4zHHmC87hfyqbwbYAoqvK",
    },
    {
      name: "Standard",
      price: "Starting at ~$385/Month",
      description:
        "Great for most production-ready use cases with an extended feature set.",
      features: [
        "Everything in Basic",
        "High availability with 99.99% uptime SLA",
        "Infinite storage",
        "Audit logs to detect security threats",
        "20%+ throughput savings that scale with usage",
      ],
      ctaText: "Get started free",
      ctaPrimary: false,
      popular: true,
      estimateLink: "#",
      planId: "standard",
      priceId: "price_1Rr5X3HmC87hfyqb2eOu7h5J",
    },
    {
      name: "Enterprise",
      price: "Starting at ~$1,150/Month",
      description:
        "Ideal for mission-critical use cases and sensitive data at GBps+ scale.",
      features: [
        "Everything in Basic and Standard",
        "Private networking",
        "GBps+ autoscaling",
        "Enhanced partition limits",
        "60%+ throughput savings that scale with usage",
      ],
      ctaText: "Get started free",
      ctaPrimary: false,
      popular: false,
      estimateLink: "#",
      planId: "enterprise",
      priceId: "price_1Rr5YHHmC87hfyqbJDsS5rPO",
    },
  ];

  const handlePlanSelect = (planId: any) => {
    setSelectedPlan(planId);
  };

  const handleCheckout = async (priceId: string, planId: string) => {
    setIsProcessing(true);
    try {
      const userId = "688beee18ad04956dcafb103"; 
      
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          priceId,
          planId,
        }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to create checkout session");
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      alert(error.message || "Payment processing failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600">
            Select the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left Info Card */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-between h-full">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="font-semibold text-lg text-gray-900">
                  Stream with Kafka powered by Kora
                </span>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Experience Kafka reinvented for the cloud as an elastically
                scalable and globally available service ready to deploy,
                operate, and scale in a matter of minutes.
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full w-full">
              See discount tables
            </Button>
          </div>

          {/* Pricing Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-0 bg-white rounded-2xl shadow overflow-hidden border">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 border-r last:border-r-0 flex flex-col h-full relative ${
                  selectedPlan === plan.planId
                    ? "bg-blue-50 border-blue-200"
                    : ""
                } ${plan.popular ? "border-t-4 border-t-blue-600" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-blue-600 font-semibold mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button
                    variant={
                      selectedPlan === plan.planId ? "default" : "outline"
                    }
                    className={`border-blue-600 font-semibold rounded-full w-full ${
                      selectedPlan === plan.planId
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "text-blue-600"
                    }`}
                    onClick={() => handlePlanSelect(plan.planId)}
                  >
                    {selectedPlan === plan.planId ? "Selected" : plan.ctaText}
                  </Button>

                  {selectedPlan === plan.planId && (
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full w-full"
                      onClick={() => handleCheckout(plan.priceId, plan.planId)}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Subscribe Now"}
                    </Button>
                  )}

                  <a
                    href={plan.estimateLink}
                    className="text-blue-600 text-sm font-medium underline text-center block"
                  >
                    Estimate your cost &gt;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}