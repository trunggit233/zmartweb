import HeroMultiPageSection from "@/components/pages/solution/multi-page-web/hero-section";
import SiteArchitectureSection from "@/components/pages/solution/multi-page-web/site-architecture-section";
import AdvantagesSection from "@/components/pages/solution/multi-page-web/advantages-section";
import ShowcaseSection from "@/components/pages/solution/multi-page-web/showcase-section";

export const metadata = {
  title: "Thiết kế Website Doanh Nghiệp Đa Trang | ZmartWeb",
  description: "Dịch vụ may đo website doanh nghiệp nhiều trang, chuẩn nhận diện thương hiệu và tối ưu SEO từ ZmartWeb.",
};

export default function MultiPageWebSolution() {
  return (
    <>
      <HeroMultiPageSection />
      <SiteArchitectureSection />
      <AdvantagesSection />
      <ShowcaseSection />
    </>
  );
}
