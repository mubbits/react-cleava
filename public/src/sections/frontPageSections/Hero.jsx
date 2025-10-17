import { useTranslation } from "../../../languages";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white py-12 md:py-12 lg:py-0 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="w-full md:w-[70%] bg-primary py-24 sm:py-20 md:pt-24  px-6 sm:px-10 md:px-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-black mb-6 sm:mb-8 leading-tight sm:leading-snug w-full md:w-2/3">
            {t("homePage.heroSection.title")}
          </h1>

          <div className="w-full md:w-[60%]">
            <p className="text-lg sm:text-xl lg:text-2xl text-black mb-4 sm:mb-6 italic">
              {t("homePage.heroSection.subTitle")}
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-black mb-4 sm:mb-6 italic">
              {t("homePage.heroSection.subTitle1")}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-black mb-6 leading-relaxed">
              {t("homePage.heroSection.subTitle2")}
            </p>
          </div>

          <button className="text-sm sm:text-base border-b-2 border-b-[#023666] text-[#023666] hover:opacity-80 transition font-medium">
            {t("homePage.contactus")}
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-[80%] md:w-auto flex justify-center  absolute -bottom-10 md:top-42 md:right-6 lg:right-6 mt-8 md:mt-0">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=800"
            }
            alt="Happy family"
            className=" w-[100%] sm:w-[80%] md:w-[700px] lg:w-[850px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
