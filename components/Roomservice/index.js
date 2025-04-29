"use client";

import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode"; // QR Scanner Library

const RoomService = () => {
  const [roomNumber, setRoomNumber] = useState(null);
  const [status, setStatus] = useState("Waiting for scan...");
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("scanner", { fps: 10, qrbox: 250 });

    scanner.render((decodedText) => {
      if (decodedText >= 1 && decodedText <= 24) {
        setRoomNumber(decodedText);
        setStatus("Room Under Cleaning...");
      } else {
        alert("Invalid room number. Please scan a valid room QR.");
      }
    });

    scannerRef.current = scanner;
    return () => scanner.clear();
  }, []);

  const handleEndCleaning = () => {
    setStatus(`Room ${roomNumber} Cleaning Completed ✅`);
    setRoomNumber(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">Room Service Scanner</h2>

      {/* QR Scanner */}
      <div id="scanner" className="w-1/2 bg-blue-200 p-6 rounded-md text-center">
        <p className="text-gray-600">Scan the room QR code...</p>
      </div>

      {/* Room Status */}
      <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
        <p className="text-blue-600">{status}</p>
      </div>

      {/* End Cleaning Button */}
      {roomNumber && (
        <button
          onClick={handleEndCleaning}
          className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          End Cleaning
        </button>
      )}
    </div>
  );
};

export default RoomService;