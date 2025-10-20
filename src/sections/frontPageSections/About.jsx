import { useTranslation } from "../../../languages";
import cleaning from "../../assets/images/home/cleaning.jpg";
import cleaningMachines from "../../assets/images/cleaningMachines.jpg";
const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full mt-20 md:mt-28 lg:mt-36 mb-10 md:mb-16 lg:mb-20">
      <div className="bg-primary w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 lg:py-20 gap-8">
        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 w-full lg:w-1/2 order-2 lg:order-1">
          {/* Left Column */}
          <div className="flex flex-col gap-3">
            <img
              src="https://media.istockphoto.com/id/518586238/photo/commercial-cleaning-contractors.webp?a=1&b=1&s=612x612&w=0&k=20&c=FoFaOdDID6va3mb8Er3g-CDR9aMdgYXvydFqFkymiis="
              alt="Cleaning service"
              className="w-full h-40 sm:h-56 md:h-42 lg:h-52 xl:h-52 object-cover rounded-xl shadow-md"
            />
            <img
              src={cleaning}
              alt="Clean home"
              className="w-full h-40 sm:h-56 md:h-42 lg:h-52 xl:h-52 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            <img
              src={cleaningMachines}
              alt="Professional cleaner"
              className="w-full h-40 sm:h-56 md:h-42 lg:h-52 xl:h-52 object-cover rounded-xl shadow-md"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1676057875109-6899ca4ae838?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
              alt="Moving service"
              className="w-full h-40 sm:h-56 md:h-42 lg:h-52 xl:h-52 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center px-2 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-medium text-black mb-4 sm:mb-6 leading-tight">
            {t("homePage.aboutus")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-black/80 font-medium leading-relaxed mb-4 sm:mb-6">
            {t("homePage.aboutDescription")}
          </p>
          <button className="border-b-2 border-[#a1695c] text-sm sm:text-base md:text-lg font-medium hover:text-[#a1695c] transition-all duration-300 self-start">
            {t("homePage.readMore")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
