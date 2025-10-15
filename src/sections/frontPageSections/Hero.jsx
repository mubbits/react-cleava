import { useTranslation } from "../../../languages";
import hero from "../../assets/images/home/hero.webp";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className=" ">
      <div className="">
        <div className="w-[70%] bg-primary py-32 px-12 relative">
          <h1 className="text-5xl font-serif italic text-black mb-4 w-2/3">
            {t("homePage.heroSection.title")}
          </h1>
          <div className="w-150">
            <p className="text-black mb-6 text-2xl italic">
              {t("homePage.heroSection.subTitle")}
            </p>
            <p className="text-black mb-6 text-xl italic">
              {t("homePage.heroSection.subTitle1")}
            </p>
            <p className="text-black mb-4 leading-relaxed">
              {t("homePage.heroSection.subTitle2")}
            </p>
          </div>
          <button className="border-b-2 border-b-[#023666]">
            {t("homePage.contactus")}
          </button>
        </div>
        <div className="absolute top-35 right-15">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            }
            alt="Happy family"
            className="rounded-lg shadow-lg h-[650px] w-[700px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
