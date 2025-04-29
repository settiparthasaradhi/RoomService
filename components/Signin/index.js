import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter(); // Initialize the Next.js router

  const handleLogin = () => {
    router.push("/Home"); 
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
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
      </div>
    </div>
  );
};

export default Login;