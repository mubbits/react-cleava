import { Check } from "lucide-react";
import Testimonials from "../sections/frontPageSections/Testimonials";
import Values from "../sections/frontPageSections/Values";
import ServiceHeroSection from "../sections/ServiceHeroSection";
import ServicePricingSection from "../sections/ServicePricingSection";
import ServiceTransitionSection from "../sections/ServiceTransitionSection";
import WhyChooseCleavaSection from "../sections/WhyChooseCleavaSection";
import { useTranslation } from "../../languages";
export default function MovingCleaning() {
  const { t } = useTranslation();
  const valuesss = t("movingCleaning.values", {
    returnObjects: true,
  });
  const pricePlans = t("movingCleaning.pricePlans", {
    returnObjects: true,
  });
  const movingCleaningData = t("movingCleaning.movingCleaningData", {
    returnObjects: true,
  });
  const service = {
    serviceHeader: {
      title: t("movingCleaning.pricingSectionTitle"),
      subTitle: t("movingCleaning.pricingSectionDesc"),
      subTitle2: "",
    },
    pricePlans: pricePlans,
  };
  return (
    <div>
      <ServiceHeroSection
        title={t("movingCleaning.movingCleaningHero")}
        desc={t("movingCleaning.movingCleaningDesc")}
        img="https://images.pexels.com/photos/1109171/pexels-photo-1109171.jpeg"
      />
      <WhyChooseCleavaSection choosingSectionData={movingCleaningData} />
      <ServicePricingSection
        service={service}
        title={service.serviceHeader.title}
        subTitle={service.serviceHeader.subTitle}
        subTitle2={service.serviceHeader.subTitle2}
      />
      <Values values={valuesss} />
      <ServiceTransitionSection />
      <Testimonials />
    </div>
  );
}
