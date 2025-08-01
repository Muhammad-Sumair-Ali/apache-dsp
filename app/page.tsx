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
import TopNavbar from "@/components/common/Top-Navbar";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <Navigation />
      <div className="min-h-screen bg-white">
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
      <Footer />
    </>
  );
}
