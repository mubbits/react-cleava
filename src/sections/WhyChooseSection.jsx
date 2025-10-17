import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../../languages";
const WhyChooseSection = ({
  title,
  desc1,
  desc2,
  img,
  leftDesc,
  rightDesc,
  leftTitle,
  rightTitle,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact-us");
  };
  return (
    <>
      {/* MISSION */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="px-4 md:px-12">
            <h2 className="text-4xl font-serif italic text-gray-800 mb-3 md:mb-6">
              {title}
            </h2>
            <p className="leading-relaxed mb-3 md:mb-6">{desc1}</p>
            <p className="font-bold leading-relaxed mb-3 md:mb-6">{desc2}</p>
            <button
              className="bg-[#002350] rounded-full text-white px-6 py-2"
              onClick={handleContact}
            >
              {t("storyPage")?.section2?.button}
            </button>
          </div>
          <div>
            <img
              src={
                "https://plus.unsplash.com/premium_photo-1663011218145-c1d0c3ba3542?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              }
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
              {leftTitle}
            </h3>
            <p className="text-md md:text-lg leading-relaxed">{leftDesc}</p>
          </div>
          <div className="text-gray-800">
            <h3 className="text-xl md:text-3xl font-semibold italic mb-3 md:mb-6">
              {rightTitle}
            </h3>
            <p className="text-md md:text-lg leading-relaxed">{rightDesc}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyChooseSection;
