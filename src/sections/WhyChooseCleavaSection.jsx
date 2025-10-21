import { Check } from "lucide-react";
import React from "react";
import { useTranslation } from "../../languages";
import { useNavigate } from "react-router-dom";

const WhyChooseCleavaSection = ({
  choosingSectionData = [],
  header = true,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact-us");
  };

  return (
    <section className="relative py-16 mt-12   px-4 sm:px-8 md:px-0 lg:px-0 bg-white">
      {/* ===== Header Section ===== */}
      {header && (
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center mb-16 space-y-6">
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-semibold text-[#002350] leading-tight">
            {t("homeCleaning.homeCleaningSectionTitle")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            {t("homeCleaning.homeCleaningSectionDesc")}
          </p>
          <a
            href="https://wa.me/+358451878083"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#002350] rounded-full text-white px-6 py-2 mb-8 text-base sm:text-lg hover:bg-[#001c3c] transition-all duration-300"
          >
            OTA YHTEYTTÄ
          </a>
        </div>
      )}

      {/* ===== Cards Section ===== */}
      <div className="bg-primary  py-10 px-4 sm:px-8 md:px-12 max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.isArray(choosingSectionData) &&
        choosingSectionData.length > 0 ? (
          choosingSectionData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-black bg-white/60 rounded-xl p-6 hover:bg-white transition-all duration-300"
            >
              <div className="size-14 sm:size-16 bg-white text-[#002350] rounded-full flex items-center justify-center mb-4 shadow-md">
                <Check size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif italic mb-4">
                {data?.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed ">
                {data?.desc}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 col-span-full">
            No data available.
          </p>
        )}
      </div>
    </section>
  );
};

export default WhyChooseCleavaSection;
