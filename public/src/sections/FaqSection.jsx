import { useState } from "react";
import { useTranslation } from "../../languages";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const faqs = t("officeCleaning.faqs", { returnObjects: true }) || [];

  return (
    <section className="py-16 md:py-24 bg-[#fdfaf7] my-12 md:my-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
        {/* ===== Header Section ===== */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">
          {t("officeCleaning.faqTitle")}
        </h2>

        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t("officeCleaning.faqDescription")}
        </p>

        <button className="border-b-2 border-[#023666] text-[#023666] hover:text-[#001c3c] text-base sm:text-lg font-medium transition-all duration-300 mb-12">
          {t("officeCleaning.contactus")}
        </button>

        {/* ===== FAQ Accordion ===== */}
        <div className="max-w-3xl mx-auto text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Question Button */}
              <button
                className={`w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 font-medium text-left text-gray-800 bg-primary focus:outline-none transition-all duration-300 ${
                  openIndex === index ? "bg-[#e6f0ff]" : "bg-primary"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold">
                  {faq.question}
                </span>
                <span className="text-2xl font-bold text-[#023666]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="bg-white px-6 py-5 text-gray-700 text-sm sm:text-base border-t border-[#e8d6cc]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
