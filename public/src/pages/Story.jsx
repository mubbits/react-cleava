import { useTranslation } from "../../languages";
import Testimonials from "../sections/frontPageSections/Testimonials";
import hero from "../assets/images/home/hero.webp";
import { useNavigate } from "react-router-dom";
export default function Story() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact-us");
  };
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-30 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-serif italic leading-tight mb-8">
            {t("storyPage")?.hero?.title}
          </h1>
          <button
            className="border-b-2 border-b-[#023666]"
            onClick={handleContact}
          >
            {t("storyPage")?.hero?.button}
          </button>
        </div>
      </section>
      {/* STORY IMAGE + TEXT */}
      <section className="bg-primary py-12 px-6 relative mt-0 md:mt-40">
        {/* Image section */}
        <div className="max-w-full mx-auto relative w-full md:px-12 -translate-y-36 md:-translate-y-60">
          <img
            src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJlYXV0aWZ1bCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            alt="Modern living room"
            className="w-full h-80 md:h-[450px] object-cover shadow-md rounded-lg"
          />
        </div>

        {/* Story section */}
        <div className="max-w-7xl mx-auto text-center text-black -mt-16 md:-mt-32">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJlYXV0aWZ1bCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="Cleava"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif italic mb-6">
            {t("storyPage")?.section1?.title}
          </h2>

          {t("storyPage")?.section1?.paragraphs?.map((p, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-center leading-relaxed mb-4 px-2"
            >
              {p}
            </p>
          ))}

          <button
            onClick={handleContact}
            className="bg-[#002350] rounded-full text-white px-6 py-2 mt-4 hover:bg-[#001a3a] transition"
          >
            {t("storyPage")?.hero?.button}
          </button>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="px-4 md:px-12">
            <h2 className="text-4xl font-serif italic text-gray-800 mb-3 md:mb-6">
              {t("storyPage")?.section2?.title}
            </h2>
            <p className="leading-relaxed mb-3 md:mb-6">
              {t("storyPage")?.section2?.paragraph1}
            </p>
            <p className="font-bold leading-relaxed mb-3 md:mb-6">
              {t("storyPage")?.section2?.paragraph2}
            </p>
            <button
              className="bg-[#002350] rounded-full text-white px-6 py-2"
              onClick={handleContact}
            >
              {t("storyPage")?.section2?.button}
            </button>
          </div>
          <div>
            <img
              src={hero}
              alt="Happy family"
              className="w-full h-auto md:h-120 object-cover relative z-10 translate-y-20 md:translate-y-10"
            />
          </div>
        </div>
      </section>

      {/* RESPONSIBILITY & SERVICE */}
      <section className="py-12 md:py-20 px-4 md:px-6  bg-primary relative mt-[-40px] md:mt-[-80px]">
        <div className="grid md:grid-cols-2 gap-12 items-center px-4 md:px-12 pt-16">
          <div className="text-gray-800">
            <h3 className="text-xl md:text-3xl font-semibold italic mb-3 md:mb-6">
              {t("storyPage")?.section3?.leftTitle}
            </h3>
            <p className="text-md md:text-lg leading-relaxed">
              {t("storyPage")?.section3?.leftText}
            </p>
          </div>
          <div className="text-gray-800">
            <h3 className="text-xl md:text-3xl font-semibold italic mb-3 md:mb-6">
              {t("storyPage")?.section3?.rightTitle}
            </h3>
            <p className="text-md md:text-lg leading-relaxed">
              {t("storyPage")?.section3?.rightText}
            </p>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
