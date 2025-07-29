import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MoreThanKafka() {
  const features = [
    {
      icon: "https://assets.confluent.io/m/2f6af9553133f4fb/original/icon-cloud_to_cloud-SVG.svg",
      title: "Cloud Native",
      subtitle: "10x Apache Kafka® service powered by the Kora Engine",
      items: [
        {
          title: "Elastic scalability",
          description: "with simple scale/shrink for GBps+ workloads and no limit retention"
        },
        {
          title: "Guaranteed resiliency",
          description: "with a 99.99% uptime SLA and built-in data durability"
        },
        {
          title: "Low latency",
          description: "with predictable performance levels, sustained over time"
        }
      ]
    },
    {
      icon: "https://assets.confluent.io/m/337a5c53a20f7e4c/original/icon-check-SVG.svg",
      title: "Complete",
      subtitle: "A complete, enterprise-grade data streaming platform",
      items: [
        {
          title: "120+ pre-built connectors",
          description: "across all your apps & data systems"
        },
        {
          title: "stream processing",
          description: "with serverless Flink",
          prefix: "In-flight "
        },
        {
          title: "security & governance",
          description: "",
          prefix: "Enterprise-grade "
        }
      ]
    },
    {
      icon: "https://assets.confluent.io/m/38e88eafee2d68e0/original/icon-global-SVG.svg",
      title: "Everywhere",
      subtitle: "Availability everywhere your data and applications reside",
      items: [
        {
          title: "Fully managed service",
          description: "available on AWS, Azure, and Google Cloud"
        },
        {
          title: "Self-managed software",
          description: "available for on-prem & private cloud workloads"
        },
        {
          title: "Hybrid & multicloud",
          description: "flexibility with clusters that seamlessly sync in real time"
        }
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Confluent Is So Much More Than Kafka
          </h2>
          <div className="flex justify-center mb-12">
            <img 
              src="https://assets.confluent.io/m/4d4544b9cf6be461/webimage-20250311-SVG-Confluent_Logo-Logotype-Midnight.png" 
              alt="Confluent Logo" 
              className="h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {feature.subtitle}
              </p>
              <ul className="text-left space-y-3 text-gray-600">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-confluent-green mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      {item.prefix && <strong>{item.prefix}</strong>}
                      <strong>{item.title}</strong>
                      {item.description && ` ${item.description}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[hsl(224,88%,56%)] text-white hover:bg-[hsl(224,76%,48%)] px-6 py-3 font-medium">
            Why You Need Confluent <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
