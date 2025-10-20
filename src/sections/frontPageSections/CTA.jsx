import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../../languages";

const CTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact-us");
  };

  const title = t("homePage")?.ctaSection?.title || "";
  const [before, after] = title.split("Olemme");

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-gray-800 mb-4 leading-tight sm:leading-snug lg:leading-[60px]">
          {before}
          <br className="hidden sm:block" />
          <span className="text-[#023666] font-semibold"> {after}</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          {t("homePage")?.ctaSection?.description}
        </p>

        {/* Button */}
        <a
          className="border-b-2 border-b-[#023666] text-[#023666] text-sm sm:text-base font-medium cursor-pointer hover:opacity-80 transition"
          href="https://wa.me/+358451878083"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("homePage")?.ctaSection?.button}
        </a>
      </div>
    </section>
  );
};

export default CTA;
