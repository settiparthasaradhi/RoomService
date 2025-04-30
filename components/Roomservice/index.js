"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RoomService = () => {
  const router = useRouter();
  const [rooms, setRooms] = useState([]);
 

  
  

  // Fetch rooms from the backend
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/rooms"); // ✅ Correct API route
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    
        const data = await response.json();
        setRooms(data);
       // console.log("Fetched rooms:", data); // Debugging line
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
      <header className="w-full p-6 bg-blue-500 text-white text-center text-3xl font-bold">
        Zing Rooms - Room Service
      </header>

      <h1 className="text-black text-left text-3xl font-bold p-4">Select a Room</h1>

      {/* {user && <p className="text-center text-lg font-medium text-gray-600">Welcome, {user.name}!</p>} */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 w-full max-w-3xl">
        {rooms.map((room) => (
          <div
            key={room.roomNumber}
            onClick={() => router.push(`/Roomservice/Servicedetails/${room.roomNumber}`)}
            className={`w-full h-[100px] flex items-center justify-center text-lg font-semibold text-white rounded-md shadow-lg cursor-pointer 
              ${room.status === "Pending" ? "bg-red-500 hover:bg-red-600" : 
              room.status === "Completed" ? "bg-green-500 hover:bg-green-600" : 
              room.status === "No Need" ? "bg-pink-500 hover:bg-pink-600" : "bg-gray-400"}
            `}
          >
            {room.roomNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomService;