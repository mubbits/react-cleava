import hero from "../assets/images/home/hero.webp";
const ServiceHeroSection = ({ title, desc, img }) => (
  <section className="h-screen pt-[80px]">
    <div className="flex justify-end relative">
      <div className="w-full absolute z-10 top-[10%]">
        <img src={img} alt="Happy family" className="w-auto h-[480px] " />
      </div>
      <div className="max-w-[70vw] w-full bg-primary py-24 flex flex-col   space-y-12 pl-[350px] relative">
        <div className="w-[700px]">
          <h1 className="text-6xl font-serif italic text-black mb-8">
            {title}
          </h1>
          <div className="w-150 mb-8">{desc}</div>
          <div>
            <button className="border-b-2 border-b-[#023666]">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default ServiceHeroSection;
