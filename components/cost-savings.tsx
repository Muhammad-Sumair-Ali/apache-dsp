import { ArrowRight, Server, Code, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CostSavings() {
  const benefits = [
    {
      icon: Server,
      title: "Reduced Infrastructure",
      description: "Reduce your infra footprint and cloud spend with elastically scaling clusters, automated data balancing, and an optimized compute, storage, and networking stack"
    },
    {
      icon: Code,
      title: "Lower Development & Ops Costs",
      description: "Eliminate the operational burdens of self-managing Kafka and avoid costly resource investments in low-level infrastructure tooling with a complete data streaming platform"
    },
    {
      icon: Shield,
      title: "Minimized Downtime",
      description: "Decrease downtime and business disruption with multi-AZ clusters and a 99.99% uptime SLA that covers both Kafka and the underlying infrastructure"
    },
    {
      icon: Headphones,
      title: "Included, Committer-Led Support",
      description: "Offload support to Confluent's committer-led experts with 1M+ hours experience delivering Kafka success in the cloud, on-prem, and everywhere in between"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Reinventing Kafka to Be Cheaper than Free
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Self-managing open source Kafka comes with many costs that consume valuable resources and tech spend. 
            Take the Confluent Cost Savings Challenge to see how you can reduce your costs of running Kafka with 
            the data streaming platform loved by developers and trusted by enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-[hsl(158,64%,52%)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Image
            height={300}
            width={300} 
              src="https://images.ctfassets.net/8vofjvai1hpv/1Z7rBhjOn6svavBuA9R2oO/9548441481d33a896993c86ff3c13485/Image__1_.svg" 
              alt="Kafka vs Confluent Comparison" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-[hsl(224,88%,56%)] text-white hover:bg-[hsl(224,76%,48%)] px-6 py-3 font-medium">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
