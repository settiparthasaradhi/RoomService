"use client"; // Ensures this runs as a client component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState(""); // Display login messages
  const router = useRouter(); // Initialize the Next.js router

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ ${data.message}`);
        router.push("/Home"); // Redirect to Home on success
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setMessage(`❌ Server Error: ${error.message}`);
    }
  };

  const handleSignupRedirect = () => {
    router.push("/Signup"); // Navigate to signup page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-700">Zing Rooms</h2>

        <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        >
          Sign In
        </button>

        <button
          onClick={handleSignupRedirect} // Navigate to signup page
          className="w-full px-4 py-2 mt-2 text-blue-500 border cursor-pointer border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
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

export default Login;