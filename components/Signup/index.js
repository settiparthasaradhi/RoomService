"use client"; // Ensures this runs as a client component

import React, { useState } from "react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          phoneNumber: phoneNumber,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`✅ ${data.message}`);
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setMessage(`❌ Server Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-700">Zing Rooms</h2>

        <div className="mb-3">
          <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleSignup}
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Signup;