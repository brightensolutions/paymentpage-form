import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentForm from "./components/PaymentForm";
import ThankYou from "./components/ThankYou";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 p-4">
        <Routes>
          <Route path="/" element={<PaymentForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
