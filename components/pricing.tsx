const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      info: "Perfect for quick weekend getaways.",
    },
    {
      name: "Premium",
      price: "$499",
      info: "Includes flights & hotel stays.",
    },
    {
      name: "Luxury",
      price: "$999",
      info: "Top-tier travel experience with premium benefits.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100" id="pricing">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Travel Plans</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((p, i) => (
            <div key={i} className="p-8 bg-white shadow rounded-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-4">{p.name}</h3>
              <p className="text-4xl mb-4 font-bold">{p.price}</p>
              <p className="mb-6">{p.info}</p>

              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
