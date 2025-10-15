import { useState } from "react";
import { useTranslation } from "../../languages";
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();
  const faqs = t("officeCleaning.faqs", {
    returnObjects: true,
  });
  return (
    <section className="py-16 bg-[#fdfaf7] my-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-serif italic text-gray-800 mb-4">
          {t("officeCleaning.faqTitle")}
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {t("officeCleaning.faqDescription")}
        </p>
        <button className="border-b-2 border-[#6b4f4f] mb-10">
          {t("officeCleaning.contactus")}
        </button>
        <div className="max-w-3xl mx-auto text-left space-y-3">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full text-left bg-primary px-6 py-4 flex justify-between items-center font-medium text-gray-800"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 py-4 border border-t-0 border-[#e8d6cc] text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
