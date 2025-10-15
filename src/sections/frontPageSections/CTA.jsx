import { useTranslation } from "../../../languages";
const CTA = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-serif italic text-gray-800 mb-4 leading-[60px]">
          {t("homePage")?.ctaSection?.title?.split("Olemme")[0]} <br />
          Olemme {t("homePage")?.ctaSection?.title?.split("Olemme")[1]}
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("homePage")?.ctaSection?.description}
        </p>
        <button className="border-b-2 border-b-[#023666]">
          {t("homePage")?.ctaSection?.button}
        </button>
      </div>
    </section>
  );
};
export default CTA;
