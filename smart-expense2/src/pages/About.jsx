import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          About Expense Tracker
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Our Expense Tracker is a powerful tool designed to help you take
          control of your finances. With a clean interface and intuitive
          features, managing your money has never been easier.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">Track Every Expense</h2>
          <p>
            Easily record where your money is going — groceries, bills, travel,
            and more.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">Set Monthly Budgets</h2>
          <p>
            Create customized budgets and get notified when you're approaching
            your limits.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">Real-Time Analytics</h2>
          <p>
            Visualize your spending with intuitive charts and graphs to better
            understand your habits.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">Secure & Private</h2>
          <p>
            Your data is encrypted and stored securely. Your financial
            information stays yours.
          </p>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-xl font-semibold">
          Join thousands of users who are gaining control of their finances
          today.
        </p>
      </div>
    </div>
  );
}

export default About;
