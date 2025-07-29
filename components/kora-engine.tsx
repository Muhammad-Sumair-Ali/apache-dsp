import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KoraEngine() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.ctfassets.net/8vofjvai1hpv/1e9zcfQxSCsfIt0ACKG8y3/ff6fd8b13f1181b4fd00600b3be85f0e/10X_Kora.png?w=320&h=186&q=90&fm=png&bg=transparent" 
              alt="10x Kora Engine" 
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              10x Apache Kafka® Service Powered by the Kora Engine
            </h3>
            <p className="text-gray-600 mb-8">
              Learn how Kora powers Confluent Cloud to be a cloud-native service that's scalable, reliable, and performant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[hsl(224,88%,56%)] text-white hover:bg-[hsl(224,76%,48%)] px-6 py-3 font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-[hsl(224,88%,56%)] text-[hsl(224,88%,56%)] hover:bg-blue-50 px-6 py-3 font-medium"
              >
                Get Free eBook <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
