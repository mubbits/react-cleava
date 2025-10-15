import React from "react";
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
  return (
    <>
      <section className="py-20 px-6 relative ">
        <div className=" grid md:grid-cols-2 gap-12 items-center">
          <div className="px-12">
            <h2 className="text-4xl font-serif font-semibold italic text-gray-800 mb-6">
              {title}
            </h2>
            <p className=" leading-relaxed mb-6">{desc1}</p>
            <p className=" font-bold leading-relaxed mb-6">{desc2}</p>
            <button className="bg-[#002350] rounded-full text-white px-6 py-2 ">
              OTA YHTEYTTÄ
            </button>
          </div>
          <div>
            <img
              src={img}
              alt="Happy family"
              className="w-auto h-120 object-cover absolute bottom-[-18%] right-0"
            />
          </div>
        </div>
      </section>
      <section className="bg-primary py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 px-12 pt-16">
          <div className="text-black">
            <h3 className="text-3xl font-semibold italic mb-6">{leftTitle}</h3>
            <p className="text-lg leading-relaxed">{leftDesc}</p>
          </div>
          <div className="text-black">
            <h3 className="text-3xl font-semibold italic mb-6">{rightTitle}</h3>
            <p className="text-lg leading-relaxed">{rightDesc}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyChooseSection;
