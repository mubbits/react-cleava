const Pricing = () => {
  const packages = [
    { hours: "<40", price: "Alle 40m2" },
    { hours: "40-50", price: "40-59m2" },
    { hours: "60-84", price: "60-84m2" },
    { hours: "85+", price: "Yli 85m2" },
  ];
  return (
    <section className="container mx-auto px-6  mb-6 py-16">
      <h2 className="text-5xl text-center mb-4">
        Pyydä ilmainen tarjous siivoukselle muutamalla klikkauksella!
      </h2>
      <p className="text-center text-2xl  mb-12">
        Aloita valitsemalla kohteen neliömäärä😊
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto py-28">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-primary  text-[#002350] p-8 rounded-lg text-center"
          >
            <div className="text-3xl font-bold mb-2">{pkg.hours}</div>
            <div className="text-sm">{pkg.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Pricing;
