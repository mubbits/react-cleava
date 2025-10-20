import { Check } from "lucide-react";
import Testimonials from "../sections/frontPageSections/Testimonials";
import Values from "../sections/frontPageSections/Values";
import ServiceHeroSection from "../sections/ServiceHeroSection";
import ServicePricingSection from "../sections/ServicePricingSection";
import ServiceTransitionSection from "../sections/ServiceTransitionSection";
import WhyChooseCleavaSection from "../sections/WhyChooseCleavaSection";
import { useTranslation } from "../../languages";
import { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ServiceHeroSection
        title={t("movingCleaning.movingCleaningHero")}
        desc={t("movingCleaning.movingCleaningDesc")}
        img="https://images.unsplash.com/photo-1591528287637-f3d5eaa83a3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aW5nJTIwb3V0JTIwY2xlYW5pbmclMjBIRHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
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
