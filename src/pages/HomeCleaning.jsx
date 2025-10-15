import { useTranslation } from "../../languages";
import Testimonials from "../sections/frontPageSections/Testimonials";
import ServiceHeroSection from "../sections/ServiceHeroSection";
import ServicePricingSection from "../sections/ServicePricingSection";
import WhyChooseCleavaSection from "../sections/WhyChooseCleavaSection";
import WhyChooseSection from "../sections/WhyChooseSection";
export default function HomeCleaning() {
  const { t } = useTranslation();
  const cleaningSectionsData = t("homeCleaning.homeCleaningSections", {
    returnObjects: true,
  });
  const pricingPlans = t("homeCleaning.pricePlans", {
    returnObjects: true,
  });
  const service = {
    serviceHeader: {
      title: t("homeCleaning.pricingSectionTitle"),
      subTitle: t("homeCleaning.pricingSectionDesc"),
      subTitle2: t("homeCleaning.pricingSectionSubTitle"),
    },
    pricePlans: pricingPlans,
  };
  return (
    <div>
      <ServiceHeroSection
        title={t("homeCleaning.heroTitle")}
        desc={t("homeCleaning.desc")}
        img={
          "https://media.istockphoto.com/id/88583803/photo/technician-working-in-auto-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=cKtodC3gUxJAKj6PcTXcegSXGFdG0RxBmo3_2FDj7gY="
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
        title={t("homeCleaning.whyChooseSection.title")}
        desc1={t("homeCleaning.whyChooseSection.desc1")}
        desc2={""}
        img={
          "https://plus.unsplash.com/premium_photo-1667520463745-6548d6a8d3c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsZWFuaW5nJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        }
        leftTitle={t("homeCleaning.whyChooseSection.leftTitle")}
        rightTitle={t("homeCleaning.whyChooseSection.rightTitle")}
        leftDesc={t("homeCleaning.whyChooseSection.leftDesc")}
        rightDesc={t("homeCleaning.whyChooseSection.rightDesc")}
      />
      <Testimonials />
    </div>
  );
}
