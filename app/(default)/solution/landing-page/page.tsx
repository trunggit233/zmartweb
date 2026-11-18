import HeroLandingPageSection from "@/components/pages/solution/landing-page/hero-section";
import PriceLandingPageSection from "@/components/pages/solution/landing-page/price-section";
import BrandTrustLandingPageSection from "@/components/pages/solution/landing-page/brand-trust-section";
import WhyWebsiteSection from "@/components/pages/solution/landing-page/why-website-section";
import TemplateShowcaseSection from "@/components/pages/solution/landing-page/template-showcase-section";
import CtaLandingPageSection from "@/components/pages/solution/landing-page/cta-section";

export const metadata = {
  title: "Thiết kế Landing Page Chuyên Nghiệp | ZmartWeb",
  description: "Dịch vụ thiết kế Landing Page chuyển đổi cao, tối ưu chiến dịch quảng cáo và bán hàng từ ZmartWeb.",
};

export default function LandingPageSolution() {
  return (
    <>
      <HeroLandingPageSection />
      <PriceLandingPageSection />
      <BrandTrustLandingPageSection />
      <WhyWebsiteSection />
      <TemplateShowcaseSection />
      <CtaLandingPageSection />
    </>
  );
}
