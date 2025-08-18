import React from "react";

function Home() {
  return (
    <div>
      {" "}
      <section className="bg-gradient-to-r from-neutral-600 via-neutral-600 to-gray-600 text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Track Your Expenses Easily
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Take control of your finances with our intuitive and powerful expense
          tracker. Monitor your spending, set budgets, and save more.
        </p>
        
      </section>
      <section className="bg-white text-gray-900 py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-6">
          Join thousands who are managing their money smarter.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition transform">
          Start Tracking Now
        </button>
      </section>
    </div>
  );
}

export default Home;
