const Features = () => {
  const features = [
    {
      title: "Affordable Packages",
      desc: "Choose from budget-friendly trips crafted for all kinds of travelers.",
    },
    {
      title: "Worldwide Destinations",
      desc: "From beaches to mountains, explore locations across the globe.",
    },
    {
      title: "24/7 Travel Support",
      desc: "We assist you anytime during your travel journey.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose GlobeXplore?</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
