"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import React from "react";

const Home = () => {
  const router = useRouter(); // Initialize router

  const handleRoomServiceClick = () => {
    router.push("/Roomservice"); // Navigate to Room Service page
  };

  const handleComplaintClick = () => {
    router.push("/complaint"); // Navigate to Submit Complaint page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-0">
      <header className="w-full p-6 bg-blue-500 text-white text-left text-3xl font-bold">
        Zing Rooms
      </header>

      {/* Row of boxes */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div
          className="w-[200px] h-[200px] bg-white shadow-lg rounded-md flex items-center justify-center cursor-pointer text-xl font-semibold text-gray-700 hover:bg-blue-200"
          onClick={handleRoomServiceClick} // Navigate on click
        >
          Room Service
        </div>
        <div
          className="w-[200px] h-[200px] bg-white shadow-lg rounded-md flex items-center justify-center cursor-pointer text-xl font-semibold text-gray-700 hover:bg-red-200"
          onClick={handleComplaintClick} // Navigate on click
        >
          Submit Complaint
        </div>
      </div>
    </div>
  );
};

export default Home;