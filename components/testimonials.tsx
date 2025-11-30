const Testimonials = () => {
  const reviews = [
    {
      name: "Aarav",
      review: "GlobeXplore made my Bali trip unforgettable. Smooth booking & amazing support!",
    },
    {
      name: "Sneha",
      review: "Affordable and well-planned packages. I had the best Europe experience!",
    },
    {
      name: "Michael",
      review: "Great customer service and fantastic travel options. Highly recommended!",
    },
  ];

  return (
    <section className="py-20" id="testimonials">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl">
              <p className="italic mb-4">"{r.review}"</p>
              <h4 className="font-semibold">- {r.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
