import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-indigo-800 py-20 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-48 h-48 opacity-10">
        <Image
          height={300}
          width={300}
          src="https://images.ctfassets.net/8vofjvai1hpv/3pnd5ZiNigQwKmbTrckzGA/5b461c942317fae678e3bf69decdec6c/Get_Started_Left_Image__1_.svg"
          alt="Cloud Left"
          className="w-full h-full"
        />
      </div>
      <div className="absolute right-0 top-0 w-48 h-48 opacity-10">
        <Image
          height={300}
          width={300}
          src="https://images.ctfassets.net/8vofjvai1hpv/7hg55JTmvyueJ2rHP8qyn/5b68770ceec70bf692cf4d87788e0be5/Get_Started_Right_Image__1_.svg"
          alt="Cloud Right"
          className="w-full h-full"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">
          Get Started With Confluent Today
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          New signups receive $400 to spend during their first 30 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-[hsl(224,88%,56%)] hover:bg-gray-100 px-8 py-4 font-semibold">
            Start for Free <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[hsl(224,88%,56%)] px-8 py-4 font-semibold"
          >
            <Play className="mr-2 h-4 w-4" /> Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
