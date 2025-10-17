import React from "react";
import { useTranslation } from "../../languages";
import { useNavigate } from "react-router-dom";

const ServiceTransitionSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact-us");
  };
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-8">
        <div className="space-y-6 md:space-y-8 text-center md:text-left">
          <h2 className="font-serif font-semibold italic text-3xl sm:text-4xl md:text-4xl text-[#002350] leading-tight">
            {t("movingCleaning.serviceTransitionSection.title")}
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 leading-relaxed text-justify md:text-left">
            {t("movingCleaning.serviceTransitionSection.desc")}
          </p>

          <div>
            <button
              onClick={handleContact}
              className="border-b-2 border-b-[#023666] text-[#023666] text-base sm:text-lg font-medium hover:text-[#001c3c] transition-all duration-300"
            >
              {t("movingCleaning.serviceTransitionSection.contactus")}
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="https://plus.unsplash.com/premium_photo-1706026591626-c54429307230?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhhcHB5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
            alt="Happy family moving"
            className="w-full max-w-[600px] h-auto  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceTransitionSection;
