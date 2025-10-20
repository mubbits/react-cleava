import { useNavigate } from "react-router-dom";

const ServicePricingSection = ({ service, title, subTitle, subTitle2 }) => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact-us");
  };

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 text-center bg-white">
      {/* ===== Header Section ===== */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold italic text-[#002350] mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2 leading-relaxed">
          {subTitle}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          {subTitle2}
        </p>
      </div>

      {/* ===== Pricing Cards ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {service?.pricePlans?.map((plan, idx) => (
          <div
            key={idx}
            className="bg-primary rounded-2xl w-full sm:w-[90%] max-w-[420px] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-black"
          >
            {/* Card Header */}
            <div className="bg-[#023666] text-white py-6 w-full rounded-t-2xl">
              <h3 className="text-2xl sm:text-3xl font-serif italic font-medium max-w-[80%] mx-auto">
                {plan.title}
              </h3>
            </div>

            {/* Price */}
            <p className="text-4xl sm:text-5xl font-serif text-[#023666] my-6">
              {plan.price} <sup className="text-xl">€/h</sup>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-800 px-6 sm:px-10 mb-8 leading-relaxed">
              {plan.desc}
            </p>

            {/* Button */}
            <a
              href="https://wa.me/+358451878083"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#002350] rounded-full text-white px-6 py-2 mb-8 text-base sm:text-lg hover:bg-[#001c3c] transition-all duration-300"
            >
              OTA YHTEYTTÄ
            </a>

            {/* Footer Text */}
            <p className="text-sm sm:text-md text-gray-700 px-6 sm:px-10 pb-8 leading-relaxed italic">
              {plan.bottomText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePricingSection;
