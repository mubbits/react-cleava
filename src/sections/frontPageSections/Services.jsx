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
    <section className="h-screen py-16 relative mb-24">
      <div className="container mx-auto px-12">
        <h2 className="text-5xl font-[parkside] italic text-center mb-12 w-1/2 mx-auto">
          {t("homePage.ourServices")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[100%] object-cover"
              />
              <div className="p-8 bg-primary absolute text-center mx-8 top-[70%]">
                <h3 className="text-2xl font-medium font-serif italic mb-3">
                  {service.title}
                </h3>
                <p className="text-md leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
