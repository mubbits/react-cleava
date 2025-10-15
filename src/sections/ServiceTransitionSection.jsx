import React from "react";
import { useTranslation } from "../../languages";
const ServiceTransitionSection = () => {
  const { t } = useTranslation();
  return (
    <div className="h-screen py-24">
      <div className="grid grid-cols-2">
        <div className="py-12 px-18 ">
          <h2 className="font-serif font-medium text-5xl mb-8 ">
            {t("movingCleaning.serviceTransitionSection.title")}
          </h2>
          <p className="text-md font-medium text-justify mb-8">
            {t("movingCleaning.serviceTransitionSection.desc")}
          </p>
          <div>
            <button className="border-b-2 border-b-[#023666]">
              {t("movingCleaning.contactus")}
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1706026591626-c54429307230?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhhcHB5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default ServiceTransitionSection;
