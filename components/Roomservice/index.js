"use client";

import { useRouter } from "next/navigation";
import React from "react";

const RoomService = () => {
  const router = useRouter();

  const roomNumbers = [
    401, 402, 403, 404,
    405, 406, 407, 408,
    409, 410, 411, 412,
    501, 502, 503, 504,
    505, 506, 507, 508,
    509, 510, 511, 512,
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      <header className="w-full p-6 bg-blue-500 text-white text-center text-3xl font-bold">
        Zing Rooms - Room Service
      </header>

      <h1 className="text-black text-left text-3xl font-bold p-4">Select a Room</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 w-full max-w-3xl">
        {roomNumbers.map((roomid) => (
          <div      
            key={roomid}
            onClick={() => router.push(`/Roomservice/Servicedetails/${roomid}`)} // Navigate dynamically
            className="w-full h-[100px] flex items-center justify-center text-lg font-semibold text-white rounded-md shadow-lg cursor-pointer bg-red-500 hover:bg-red-600"
          >
            Room {roomid}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomService;