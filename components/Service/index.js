"use client";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ServiceDetails = () => {
  const router = useRouter();
  const { roomid } = router.query; // Get roomId from URL

  const [serviceType, setServiceType] = useState("");
  const [status, setStatus] = useState("Waiting for service selection...");
  const [isServiceStarted, setIsServiceStarted] = useState(false);

  useEffect(() => {
    if (!roomid) return;
  }, [roomid]);

  // ✅ API Call to Update Room Status
  const updateRoomStatus = async (newStatus) => {
    try {
      const response = await fetch(`http://localhost:5000/api/rooms/${roomid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus === "Completed" ? "Completed" : "Cleaning", // ✅ Ensure valid status
          serviceType: newStatus, // ✅ Store service type separately
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setStatus(`Room ${roomid}: ${newStatus} ✅`);
        setIsServiceStarted(newStatus !== "Completed");
      } else {
        console.error("Error updating room:", data.message);
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full p-6 bg-indigo-600 text-white shadow-lg">
        <h1 className="text-center text-3xl font-bold tracking-tight">
          Zing Rooms - Room {roomid || "Loading..."}
        </h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-gray-800 text-2xl font-semibold mb-6">
          Room Service Management
        </h2>

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          {/* Service Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Service Type
            </label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-black"
              disabled={isServiceStarted}
            >
              <option value="">Select Service Type</option>
              <option value="Checkout Room">Checkout Room</option>
              <option value="Dusting Room">Dusting Room</option>
              <option value="Room Service">Room Service</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => updateRoomStatus(serviceType)}
              disabled={isServiceStarted || !serviceType}
              className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors shadow-sm disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed"
            >
              Start Room Service
            </button>

            <button
              onClick={() => updateRoomStatus("Completed")}
              disabled={!isServiceStarted}
              className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors shadow-sm disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed"
            >
              End Room Service
            </button>
          </div>

          {/* Status Indicator */}
          <div className={`p-4 rounded-md border ${status.includes("Started") ? "bg-amber-50 border-amber-200" : status.includes("Completed") ? "bg-emerald-50 border-emerald-200" : "bg-indigo-50 border-indigo-200"}`}>
            <p className={`text-center font-medium ${status.includes("Started") ? "text-amber-700" : status.includes("Completed") ? "text-emerald-700" : "text-indigo-700"}`}>
              {status}
            </p>
          </div>

          {/* Navigation Button */}
          <button
            onClick={() => router.push("/Roomservice")}
            className="w-full px-6 py-3 text-gray-600 font-medium rounded-md hover:bg-gray-50 transition-colors border border-gray-200"
          >
            Back to Room List
          </button>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetails;