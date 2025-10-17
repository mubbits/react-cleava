import { Check } from "lucide-react";
import { useTranslation } from "../../languages";
import Testimonials from "../sections/frontPageSections/Testimonials";
import Values from "../sections/frontPageSections/Values";
import ServiceHeroSection from "../sections/ServiceHeroSection";
import ServicePricingSection from "../sections/ServicePricingSection";
import WhyChooseCleavaSection from "../sections/WhyChooseCleavaSection";
import FaqSection from "../sections/FaqSection";
export default function OfficeCleaning() {
  const { t } = useTranslation();
  const sectionServices = t("officeCleaning.officeCleaningServices", {
    returnObjects: true,
  });
  const pricePlans = t("officeCleaning.pricePlans", {
    returnObjects: true,
  });
  const values = t("officeCleaning.values", {
    returnObjects: true,
  });
  const service = {
    serviceHeader: {
      title: t("officeCleaning.pricingTitle"),
      subTitle: t("officeCleaning.pricingSubtitle"),
      subTitle2: t("officeCleaning.pricingSubtitle1"),
    },
    pricePlans: pricePlans,
  };
  return (
    <div>
      <ServiceHeroSection
        title={t("officeCleaning.heroTitle")}
        desc={t("officeCleaning.heroDesc")}
        img={
          "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        }
      />
      <WhyChooseCleavaSection
        choosingSectionData={sectionServices}
        header={false}
      />
      <ServicePricingSection
        service={service}
        title={service.serviceHeader.title}
        subTitle={service.serviceHeader.subTitle}
        subTitle2={service.serviceHeader.subTitle2}
      />
      <Values values={values} />
      <FaqSection />
      <Testimonials />
    </div>
  );
}
