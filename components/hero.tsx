const Hero = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-600 to-blue-400 text-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Explore the World with GlobeXplore</h1>
        <p className="text-lg mb-8">
          Discover breathtaking destinations, book affordable trips, and create unforgettable memories.
        </p>
        <a
          href="#pricing"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
