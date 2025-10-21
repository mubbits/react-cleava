import { useTranslation } from "../../languages";
import hero from "../assets/images/home/hero.webp";

const ServiceHeroSection = ({ title, desc, img }) => {
  const { t } = useTranslation();
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen pt-16">
      <div className="w-full md:w-1/2 h-[300px] md:h-auto">
        <img
          src={img || hero}
          alt="Service illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 bg-primary flex items-center justify-center p-8 md:p-16 lg:p-16">
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-serif italic text-black leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed">{desc}</p>

          <div>
            <a
              href="https://wa.me/+358451878083"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border-b-2 border-[#023666] text-black hover:text-[#023666] transition-colors duration-300"
            >
              {t("navbar.contact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
