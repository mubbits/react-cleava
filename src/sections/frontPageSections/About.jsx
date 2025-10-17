import { useTranslation } from "../../../languages";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-end mt-20 md:mt-32 lg:mt-36 mb-10 md:mb-16 lg:mb-18">
      <div className="bg-primary w-full  flex justify-center relative px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <img
                src="https://media.istockphoto.com/id/518586238/photo/commercial-cleaning-contractors.webp?a=1&b=1&s=612x612&w=0&k=20&c=FoFaOdDID6va3mb8Er3g-CDR9aMdgYXvydFqFkymiis="
                alt="Cleaning service"
                className="h-full w-full mb-2 p-2 sm:p-4 object-cover rounded-lg"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
              alt="Clean home"
              className="h-full w-full mb-2 p-2 sm:p-4 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <img
              src="https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
              alt="Professional cleaner"
              className="h-full w-full mb-2 p-2 sm:p-4 object-cover rounded-lg"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1676057875109-6899ca4ae838?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
              alt="Moving service"
              className="h-full w-full mb-2 p-2 sm:p-4 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="max-w-xl p-6 sm:p-10 md:p-16 lg:p-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium font-serif italic text-black mb-4 sm:mb-6">
            {t("homePage.aboutus")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-md font-medium leading-relaxed mb-4 sm:mb-6 text-black/80">
            {t("homePage.aboutDescription")}
          </p>
          <button className="border-b-2 border-b-[#a1695c] text-sm sm:text-base md:text-lg hover:text-[#a1695c] transition">
            {t("homePage.readMore")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
