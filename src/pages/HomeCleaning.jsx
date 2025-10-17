import { useTranslation } from "../../languages";
import Testimonials from "../sections/frontPageSections/Testimonials";
import ServiceHeroSection from "../sections/ServiceHeroSection";
import ServicePricingSection from "../sections/ServicePricingSection";
import WhyChooseCleavaSection from "../sections/WhyChooseCleavaSection";
import WhyChooseSection from "../sections/WhyChooseSection";

export default function HomeCleaning() {
  const { t } = useTranslation();
  console.log("✌️t --->", t);

  const hc = t("homeCleaning");

  const cleaningSectionsData = hc?.homeCleaningSections;
  console.log("✌️cleaningSectionsData --->", cleaningSectionsData);
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

  return (
    <div>
      <ServiceHeroSection
        title={hc?.heroTitle}
        desc={hc?.desc}
        img="https://media.istockphoto.com/id/88583803/photo/technician-working-in-auto-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=cKtodC3gUxJAKj6PcTXcegSXGFdG0RxBmo3_2FDj7gY="
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
        img="https://plus.unsplash.com/premium_photo-1667520463745-6548d6a8d3c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsZWFuaW5nJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        leftTitle={hc?.whyChooseSection?.leftTitle}
        rightTitle={hc?.whyChooseSection?.rightTitle}
        leftDesc={hc?.whyChooseSection?.leftDesc}
        rightDesc={hc?.whyChooseSection?.rightDesc}
      />

      <Testimonials />
    </div>
  );
}
