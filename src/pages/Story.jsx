import { useTranslation } from "../../languages";
import Testimonials from "../sections/frontPageSections/Testimonials";
import hero from "../assets/images/home/hero.webp";
export default function Story() {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-30 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic leading-tight mb-8">
            {t("storyPage")?.hero?.title}
          </h1>
          <button className="border-b-2 border-b-[#023666]">
            {t("storyPage")?.hero?.button}
          </button>
        </div>
      </section>
      {/* STORY IMAGE + TEXT */}
      <section className="bg-primary py-20 px-6 relative mt-72">
        <div className="max-w-full h-full absolute w-full top-[-40%] px-12">
          <img
            src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJlYXV0aWZ1bCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
            alt="Modern living room"
            className="w-full h-130 object-cover shadow-md"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center text-black pt-36">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJlYXV0aWZ1bCUyMHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="Cleava"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-4xl font-serif italic mb-8">
            {t("storyPage")?.section1?.title}
          </h2>
          {t("storyPage")?.section1?.paragraphs?.map((p, i) => (
            <p key={i} className="text-lg text-center leading-relaxed mb-6">
              {p}
            </p>
          ))}
          <button className="bg-[#002350] rounded-full text-white px-6 py-2">
            {t("storyPage")?.hero?.button}
          </button>
        </div>
      </section>
      {/* MISSION */}
      <section className="py-20 px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="px-12">
            <h2 className="text-4xl font-serif italic text-gray-800 mb-6">
              {t("storyPage")?.section2?.title}
            </h2>
            <p className="leading-relaxed mb-6">
              {t("storyPage")?.section2?.paragraph1}
            </p>
            <p className="font-bold leading-relaxed mb-6">
              {t("storyPage")?.section2?.paragraph2}
            </p>
            <button className="bg-[#002350] rounded-full text-white px-6 py-2">
              {t("storyPage")?.section2?.button}
            </button>
          </div>
          <div>
            <img
              src={hero}
              alt="Happy family"
              className="w-full h-120 object-cover absolute bottom-[-18%]"
            />
          </div>
        </div>
      </section>
      {/* RESPONSIBILITY & SERVICE */}
      <section className="bg-primary py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 px-12 pt-16">
          <div className="text-black">
            <h3 className="text-3xl font-semibold italic mb-6">
              {t("storyPage")?.section3?.leftTitle}
            </h3>
            <p className="text-lg leading-relaxed">
              {t("storyPage")?.section3?.leftText}
            </p>
          </div>
          <div className="text-black">
            <h3 className="text-3xl font-semibold italic mb-6">
              {t("storyPage")?.section3?.rightTitle}
            </h3>
            <p className="text-lg leading-relaxed">
              {t("storyPage")?.section3?.rightText}
            </p>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
