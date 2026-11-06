import HeroSection from "@/components/pages/home/hero-section";
import BrandTrust from "@/components/pages/home/brand-trust";
import ServicesSection from "@/components/pages/home/services-section";
import OurProjectsSection from "@/components/pages/home/our-projects-section";
import BlogSection from "@/components/pages/home/blog-section";
import FaqsSection from "@/components/pages/home/faqs-section";
import CtaActionSection from "@/components/pages/home/cta-action-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandTrust />
      <ServicesSection />
      <OurProjectsSection />
      <BlogSection />
      <FaqsSection />
      <CtaActionSection />
    </>
  );
}
