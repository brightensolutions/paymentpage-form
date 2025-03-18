import React, { useState } from "react";

const PaymentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Alert State

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-300 p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-7xl border border-gray-600 overflow-hidden">
      {isSubmitted && (
        <div className="bg-green-600 text-white p-3 rounded mb-4 font-semibold">
          ✅ Form submitted successfully!
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-100">
        Verification & Payment Form
      </h2>

      <form
        className="space-y-4 sm:space-y-6"
        action="https://formsubmit.co/sales@chaudharienterprise.com"
        method="POST"
        encType="multipart/form-data"
        onSubmit={() => setIsSubmitted(true)}
      >
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-gray-400 text-sm text-left font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-500 bg-gray-700 rounded focus:ring-2 focus:ring-gray-500"
              placeholder="Enter Name"
              required
            />
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block text-gray-400 text-sm text-left font-semibold">
              Surname
            </label>
            <input
              type="text"
              name="surname"
              className="w-full p-2 border border-gray-500 bg-gray-700 rounded focus:ring-2 focus:ring-gray-500"
              placeholder="Enter Surname"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-sm text-left font-semibold">
            Contact No
          </label>
          <input
            type="tel"
            name="contact"
            className="w-full p-2 border border-gray-500 bg-gray-700 rounded focus:ring-2 focus:ring-gray-500"
            placeholder="Enter Contact Number"
            required
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm text-left font-semibold">
            Requirement Details
          </label>
          <textarea
            name="requirementDetails"
            className="w-full p-2 border border-gray-500 bg-gray-700 rounded focus:ring-2 focus:ring-gray-500"
            rows="3"
            placeholder="Enter details"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <label className="block text-gray-400 text-sm text-center font-semibold">
            Scan QR Code for Payment
          </label>
          <img
            src="/images/scanner3.jpg"
            alt="Scanner Image"
            className="w-full sm:w-1/3 max-w-xs min-w-[150px] border border-gray-500 rounded shadow-md mx-auto"
          />
        </div>

        <div className="text-center">
          <label className="block text-gray-400 text-sm text-center font-semibold">
            Scan Cheque Image for Reference
          </label>
          <img
            src="/cheque.jpeg"
            alt="Cheque Image"
            className="w-full max-w-2xl min-w-[300px] border border-gray-500 rounded shadow-md mx-auto"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm text-left font-semibold">
            Upload ID Proof
          </label>
          <input
            type="file"
            name="idProof"
            className="w-full p-2 border border-gray-500 bg-gray-700 rounded focus:ring-2 focus:ring-gray-500"
            accept="image/png, image/jpeg"
            required
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm text-left font-semibold">
            Upload Payment Screenshot
          </label>
          <input
            type="file"
            name="paymentScreenshot"
            className="w-full p-2 border border-gray-500 bg-gray-700 rounded focus:ring-2 focus:ring-gray-500"
            accept="image/png, image/jpeg"
            required
          />
        </div>

        {/* Hidden Fields for Control */}
        <input
          type="hidden"
          name="_next"
          value="https://chaudharienterprise.in/thank-you"
        />
        <input
          type="hidden"
          name="_subject"
          value="New Submission from Payment Form"
        />

        <button className="w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
