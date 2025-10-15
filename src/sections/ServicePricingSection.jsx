const ServicePricingSection = ({ service, title, subTitle, subTitle2 }) => {
  return (
    <section className="py-16 text-center">
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-5xl font-serif font-semibold italic   mb-8">
          {title}
        </h2>
        <p className="font-medium text-xl mb-2">{subTitle}</p>
        <p className="font-medium text-lg ">{subTitle2}</p>
      </div>
      <div className="flex  justify-center items-start gap-x-12 mx-12">
        {service?.pricePlans?.map((plan, idx) => (
          <div
            key={idx}
            className="  shadow-sm  hover:shadow-md bg-primary w-[500px]"
          >
            <div className="bg-[#023666] text-white py-6 ">
              <h3 className="text-3xl font-serif italic mb-2 max-w-[80%] mx-auto">
                {plan.title}
              </h3>
            </div>
            <p className="text-5xl font-serif  text-primary my-8">
              {plan.price} <sup>€/h</sup>
            </p>
            <p className=" mt-2 px-16 text-md mb-16">{plan?.desc}</p>
            <button className="bg-[#002350] rounded-full text-white px-6 py-2 mb-12">
              OTA YHTEYTTÄ
            </button>
            <p className=" mt-2 px-16 text-md mb-16">{plan?.bottomText}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServicePricingSection;
