import React, { useState } from "react";

const PaymentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // Alert State

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-300 p-4 sm:p-6 rounded-lg shadow-xl min-h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-4xl mx-auto">
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
              src="scanner.jpeg"
              alt="Scanner Image"
              className="w-2/3 sm:w-1/2 max-w-[400px] sm:max-w-[450px] border border-gray-500 rounded shadow-md mx-auto"
            />
          </div>

          <div className="text-center bg-gray-700 p-4 rounded-lg border border-gray-500">
            <h3 className="font-bold text-gray-300 text-lg mb-2">
              PAYMENT MODE
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              NEFT / CHEQUE / BANK TRANSFER / UPI ACCEPTED
            </p>
            <p className="text-sm text-blue-400">
              Bank Name: The Surat District Co-operative Bank Ltd.
            </p>
            <p className="text-sm text-blue-400">Account No: 401001433372</p>
            <p className="text-sm text-blue-400">IFSC: SDCB0000004</p>
            <p className="text-sm text-blue-400">Upi Number: 9974870436</p>
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
    </div>
  );
};

export default PaymentForm;
