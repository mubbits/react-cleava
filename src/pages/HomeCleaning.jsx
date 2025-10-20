import { useEffect } from "react";
import { useTranslation } from "../../languages";
import Testimonials from "../sections/frontPageSections/Testimonials";
import ServiceHeroSection from "../sections/ServiceHeroSection";
import ServicePricingSection from "../sections/ServicePricingSection";
import WhyChooseCleavaSection from "../sections/WhyChooseCleavaSection";
import WhyChooseSection from "../sections/WhyChooseSection";
import homeCleaning from "../assets/images/homeCleaning.jpg";
export default function HomeCleaning() {
  const { t } = useTranslation();

  const hc = t("homeCleaning");

  const cleaningSectionsData = hc?.homeCleaningSections;

  const pricingPlans = hc?.pricePlans;

  const service = {
    serviceHeader: {
      title: hc?.pricingSectionTitle,
      subTitle: hc?.pricingSectionDesc,
      subTitle2: hc?.pricingSectionSubTitle,
    },
    pricePlans: pricingPlans,
  };

  if (!hc) console.warn("⚠️ Translation missing for 'homeCleaning'");
  if (!cleaningSectionsData)
    console.warn("⚠️ Missing 'homeCleaningSections' in language file");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ServiceHeroSection
        title={hc?.heroTitle}
        desc={hc?.desc}
        img={
          "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW5pbmclMjBIb21lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
        }
      />

      <WhyChooseCleavaSection choosingSectionData={cleaningSectionsData} />

      <ServicePricingSection
        service={service}
        title={service.serviceHeader.title}
        subTitle={service.serviceHeader.subTitle}
        subTitle2={service.serviceHeader.subTitle2}
      />

      <WhyChooseSection
        title={hc?.whyChooseSection?.title}
        desc1={hc?.whyChooseSection?.desc1}
        desc2={hc?.whyChooseSection?.desc2}
        img="https://images.pexels.com/photos/3616735/pexels-photo-3616735.jpeg"
        leftTitle={hc?.whyChooseSection?.leftTitle}
        rightTitle={hc?.whyChooseSection?.rightTitle}
        leftDesc={hc?.whyChooseSection?.leftDesc}
        rightDesc={hc?.whyChooseSection?.rightDesc}
      />

      <Testimonials />
    </div>
  );
}
