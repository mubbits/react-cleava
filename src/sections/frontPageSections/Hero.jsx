import { useTranslation } from "../../../languages";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-16 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center  ">
        <div className="w-full  bg-primary h-full py-24 px-4 md:px-12 flex flex-col   space-y-12 ">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif italic text-black mb-6 sm:mb-8 leading-tight sm:leading-snug w-full md:w-2/3">
            {t("homePage.heroSection.title")}
          </h1>

          <div className="w-full ">
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

          <div>
            <button className="text-sm sm:text-base border-b-2 border-b-[#023666] text-[#023666] hover:opacity-80 transition font-medium">
              {t("homePage.contactus")}
            </button>
          </div>
        </div>

        <div className="flex justify-center h-full    ">
          <img
            src={
              "https://images.pexels.com/photos/634007/pexels-photo-634007.jpeg"
            }
            alt="Happy family"
            className=" w-[100%]  h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
