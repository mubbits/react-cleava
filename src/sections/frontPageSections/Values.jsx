import { Check } from "lucide-react";
import { FaEye } from "react-icons/fa";
const Values = ({ values }) => {
  return (
    <section className="bg-primary py-16 mx-12 ">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-black">
              <div className="flex items-start mb-4 gap-3">
                <div className="p-2 rounded-full text-[#002350] bg-white">
                  <span className="size-10 flex items-center justify-center ">
                    {" "}
                    <Check />
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-serif italic mb-6">
                    {value.title}
                  </h3>
                  <p className="text-lg  opacity-90 text-justify">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Values;
