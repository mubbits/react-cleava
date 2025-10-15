import { useTranslation } from "../../../languages";
import img1 from "../../assets/images/about/img1.webp";
import img2 from "../../assets/images/about/img2.webp";
import img3 from "../../assets/images/about/img3.webp";
import img4 from "../../assets/images/about/img4.webp";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="flex justify-end mt-36 mb-18 ">
      <div className="bg-primary w-[70%] flex justify-center relative">
        <div className="absolute left-[-400px]">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col ">
              <div className="flex justify-end">
                <img
                  src={
                    "https://media.istockphoto.com/id/518586238/photo/commercial-cleaning-contractors.webp?a=1&b=1&s=612x612&w=0&k=20&c=FoFaOdDID6va3mb8Er3g-CDR9aMdgYXvydFqFkymiis="
                  }
                  alt="Cleaning service"
                  className="h-[160px] w-[200px] mb-2 p-4"
                />
              </div>
              <img
                src={
                  "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFja2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                }
                alt="Clean home"
                className="h-[300px] w-[300px] object-cover p-4"
              />
            </div>
            <div className="flex flex-col ">
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                }
                alt="Professional cleaner"
                className="h-[300px] w-[300px] p-4 object-cover"
              />
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1676057875109-6899ca4ae838?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFja2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                }
                alt="Moving service"
                className="h-[160px] w-[200px] p-4"
              />
            </div>
          </div>
        </div>
        <div className="w-150 p-20">
          <h2 className="text-5xl font-medium font-serif italic text-black mb-6">
            {t("homePage.aboutus")}
          </h2>
          <p className="font-medium leading-relaxed mb-6">
            {t("homePage.aboutDescription")}
          </p>
          <button className="border-b-2 border-b-[#a1695c]">
            {t("homePage.readMore")}
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
