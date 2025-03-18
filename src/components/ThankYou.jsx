import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 via-white to-green-50 p-6 w-full">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg text-center border border-green-300">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          🎉 Thank You!
        </h2>
        <p className="text-lg text-gray-700">
          Your submission was successful. Our team will get back to you soon.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
