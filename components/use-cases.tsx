import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("ai");

  const useCases = {
    ai: {
      title: "Artificial Intelligence",
      description:
        "Your AI models are only as good as the data that's provided to them. Bring real-time, contextual, highly governed and trustworthy data to your AI systems and applications, just in time, and deliver production-scale AI-powered applications faster.",
      image:
        "https://images.ctfassets.net/8vofjvai1hpv/3JOs2waqPJWXEvY4Zd6OKf/4c32ede64522611e184bd7f3a4a685bd/AI_Diagram_-_Home__3_-min.png?w=1120&h=760&q=90&fm=png&bg=transparent",
      link: "https://www.confluent.io/generative-ai/",
    },
    microservices: {
      title: "Event-Driven Microservices",
      description:
        "Unlock greater agility and faster innovation with loosely coupled microservices. Use Confluent to completely decouple your microservices, standardize on inter-service communication, and eliminate the need to maintain independent data states.",
      image:
        "https://images.ctfassets.net/8vofjvai1hpv/6fU56qyUPfIDDl8qT2lfcj/70e96a6e7aafdd95ff70b8b3c57055c6/Event-Driven.png?w=1120&h=760&q=90&fm=png&bg=transparent",
      link: "https://www.confluent.io/use-case/event-driven-microservices-communication/",
    },
    hybrid: {
      title: "Universal Data Mobility",
      description:
        "Embrace the cloud at your pace and maintain a persistent data bridge to keep data across all on-prem, hybrid and multicloud environments in sync. Incrementally migrate to the cloud, enable developers to access best-of-breed cloud tools, and build next-gen apps faster.",
      image:
        "https://images.ctfassets.net/8vofjvai1hpv/1qhi04JmNVT0R4AdZEVZNC/33072433c5a3118ee9e6042323a21fd9/Hybrid_and_Multicloud.png?w=1120&h=760&q=90&fm=png&bg=transparent",
      link: "https://www.confluent.io/use-case/hybrid-and-multicloud/",
    },
    customer360: {
      title: "Connected Customer Experiences",
      description:
        "Capture and process customer interactions as they happen. Build a data-rich view of their actions and preferences to engage with them in the most meaningful ways—personalizing their experiences, across every channel in real time.",
      image:
        "https://images.ctfassets.net/8vofjvai1hpv/6zeA22sxdshnniRBHlguhG/8465789943e621c3fb2ddc2ddfee7921/Customer_360__1_.png?w=560&h=380&q=90&fm=png&bg=transparent",
      link: "https://www.confluent.io/use-case/customer-360/",
    },
  };

  const tabs = [
    { id: "ai", label: "Artificial Intelligence" },
    { id: "microservices", label: "Microservices" },
    { id: "hybrid", label: "Hybrid & Multicloud" },
    { id: "customer360", label: "Customer 360" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Fuel Your Entire Business With Real-Time Data
          </h2>

          {/* Use Case Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-confluent-blue shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Use Case Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {useCases[activeTab as keyof typeof useCases].title}
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              {useCases[activeTab as keyof typeof useCases].description}
            </p>
            <Button className="bg-[hsl(224,88%,56%)] text-white hover:bg-[hsl(224,76%,48%)] px-6 py-3 font-medium">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div>
            <Image
              height={100}
              width={100}
              src={useCases[activeTab as keyof typeof useCases].image}
              alt={useCases[activeTab as keyof typeof useCases].title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
