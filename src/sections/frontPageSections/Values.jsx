import { Check } from "lucide-react";

const Values = ({ values }) => {
  return (
    <section className="bg-primary py-10 sm:py-14 md:py-12 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start gap-4 sm:gap-5 md:gap-6 text-black bg-white/10 p-4 sm:p-6 rounded-xl hover:bg-white/20 transition"
            >
              {/* Icon */}
              <div className="flex-shrink-0 p-2 rounded-full bg-white text-[#002350] shadow-md">
                <span className="flex items-center justify-center size-8 sm:size-10">
                  <Check className="size-5 sm:size-6" />
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-serif italic mb-2 sm:mb-3 md:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed ">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
