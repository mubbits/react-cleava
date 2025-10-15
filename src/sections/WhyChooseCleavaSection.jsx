import { Check } from "lucide-react";
import React from "react";
import { useTranslation } from "../../languages";
const WhyChooseCleavaSection = ({ choosingSectionData, header }) => {
  const { t } = useTranslation();
  return (
    <div className="h-screen  py-16 mt-20">
      {header === false ? (
        ""
      ) : (
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6">
          <h2 className="font-serif italic text-center text-5xl mb-8">
            {t("homeCleaning.homeCleaningSectionTitle")}
          </h2>
          <p className="font-medium text-xl text-center max-w-4xl mx-auto">
            {t("homeCleaning.homeCleaningSectionDesc")}
          </p>
          <button className="border-b-2 border-b-[#023666]">
            OTA YHTEYTTÄ
          </button>
        </div>
      )}
      <div className="flex flex-wrap justify-between items-start bg-primary mx-8 my-12">
        {choosingSectionData?.map((data, index) => {
          return (
            <div className="p-6 w-[30%]">
              <div className="size-16 font-bold bg-white rounded-full flex items-center justify-center mb-6">
                <Check size={30} />
              </div>
              <p className="text-2xl mb-6 font-serif italic">{data?.title}</p>
              <p className="text-md">{data?.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WhyChooseCleavaSection;
