import hero from "../assets/images/home/hero.webp";
const ServiceHeroSection = ({ title, desc, img }) => (
  <section className="h-auto md:h-screen  pt-[40px]">
    <div className="block md:flex justify-center md:justify-end relative">
      <div className="w-full md:absolute z-10 top-[20%]">
        <img
          src={img}
          alt="Happy family"
          className="w-full md:w-auto h-auto md:h-[500px] "
        />
      </div>
      <div className="max-w-full md:max-w-[70vw] w-full bg-primary py-24 px-4 md:px-0 flex flex-col   space-y-12 md:pl-[350px] relative">
        <div className="max-w-full md:w-[700px]">
          <h1 className="text-2xl md:text-6xl font-serif italic text-black mb-8">
            {title}
          </h1>
          <div className="w-full md:w-150 mb-8">{desc}</div>
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
