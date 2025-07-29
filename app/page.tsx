"use client";
import HeroSection from "@/components/hero-section";
import CustomerLogos from "@/components/customer-logos";
import PlatformSection from "@/components/platform-section";
import Testimonials from "@/components/testimonials";
import MoreThanKafka from "@/components/more-than-kafka";
import KoraEngine from "@/components/kora-engine";
import CostSavings from "@/components/cost-savings";
import UseCases from "@/components/use-cases";
import CTASection from "@/components/cta-section";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* Top Banner */}
        <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm">
          <span>
            [Demo] Migrate from Kafka Services to Confluent Cloud + Save 70% on
            Costs |{" "}
          </span>
          <Link href="/register">
            <span className="underline hover:no-underline font-medium">
              Register Now →
            </span>
          </Link>
        </div>
        <HeroSection />
        <CustomerLogos />
        <PlatformSection />
        <Testimonials />
        <MoreThanKafka />
        <KoraEngine />
        <CostSavings />
        <UseCases />
        <CTASection />
      </div>
    </div>
  );
}
