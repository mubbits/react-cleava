import { useTranslation } from "../../../languages";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("homePage.service1Title"),
      image:
        "https://media.istockphoto.com/id/2213292677/photo/portrait-of-young-asian-family-father-mother-son-toddlerasian-family-sitting-in-the-living.webp?a=1&b=1&s=612x612&w=0&k=20&c=NXCb9pCX2-dfw3uwGmPZeH9SW9yAu1y66BMOqj2Uq8w=",
      description: t("homePage.service1Desc"),
    },
    {
      title: t("homePage.service2Title"),
      image:
        "https://media.istockphoto.com/id/1460990606/photo/truck-car-moving-house-for-customers-delivering-boxes-and-furniture-vehicle-transportation.webp?a=1&b=1&s=612x612&w=0&k=20&c=YG4za_qarXe77Q_xTY_2CQZDjc0iZvTg_NRD3-AI-vg=",
      description: t("homePage.service2Desc"),
    },
    {
      title: t("homePage.service3Title"),
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      description: t("homePage.service3Desc"),
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative mb-16 lg:mb-8">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[parkside] italic text-center mb-8 sm:mb-12 w-full md:w-2/3 lg:w-1/2 mx-auto">
          {t("homePage.ourServices")}
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 md:gap-10">
          {services.map((service, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] object-cover"
              />

              {/* Service Info Box */}
              <div className="bg-primary text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 w-[90%] sm:w-[85%] md:w-[80%]  h-[200px] md:h-[280px] shadow-md">
                <h3 className="text-xl sm:text-2xl font-medium font-serif italic mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-black/80">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
