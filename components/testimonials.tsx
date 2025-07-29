import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
      logo: "https://images.ctfassets.net/8vofjvai1hpv/4BjC5bx8JS8960WUNCniEQ/56558397019e485e815f6c7f4cbba705/expedia.svg",
      alt: "Expedia",
      quote: "Confluent Cloud made it possible for us to meet our tight launch deadline with limited resources. With event streaming as a managed service, we had no costly hires to maintain our clusters and no worries about 24x7 reliability.",
      link: "https://www.confluent.io/customers/expedia/"
    },
    {
      logo: "https://images.ctfassets.net/8vofjvai1hpv/OhgX8USafLTZsDtaMlCmt/f14a93f362b33e4db5c5e79e134e0e76/michelin.svg",
      alt: "Michelin",
      quote: "Confluent offers a complete, end-to-end data streaming platform with all the enterprise-grade capabilities we need to run mission-critical use cases. Over the last two years, we estimate they've helped us gain eight or nine months in terms of time-to-market for deploying Apache Kafka.",
      link: "https://www.confluent.io/customers/michelin/"
    },
    {
      logo: "https://images.ctfassets.net/8vofjvai1hpv/e3FuJTXdkjAtxkn55uI1D/03e16db150cef9d17a64947433eca80c/instacart.svg",
      alt: "Instacart",
      quote: "We don't have the ability to go hire a bunch of engineers to babysit Kafka. Being able to offload those concerns to Confluent is just a major relief, allowing us to focus on delivering value to the organization and not worry about ops or other infrastructure overhead.",
      link: "https://www.confluent.io/customers/instacart/"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Image
                height={10}
                width={10}
                  src={testimonial.logo} 
                  alt={testimonial.alt} 
                  className="h-8 mb-6"
                />
                <blockquote className="text-gray-700 mb-6">
                  {testimonial.quote}
                </blockquote>
                <Link 
                  href={testimonial.link} 
                  className="text-confluent-blue font-medium hover:underline flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
