import Room from "../models/Room.js";

// 1️⃣ Initialize and Fetch All Rooms (Merged Function)
export const getOrInitializeRooms = async (req, res) => {
  try {
    let rooms = await Room.find();

    // If rooms are already in the database, return them
    if (rooms.length === 24) return res.json(rooms);

    // Otherwise, initialize the rooms
    const roomNumbers = [
      401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412,
      501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512,
    ];

    const newRooms = roomNumbers.map((roomNumber) => ({
      roomNumber,
      status: "Pending", // Default Status
      serviceType: "Room Service",
    }));

    await Room.insertMany(newRooms);

    // Fetch newly inserted rooms and return them
    rooms = await Room.find();
    res.status(201).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateRoomService = async (req, res) => {
  const { roomId } = req.params;
  const { status, serviceType } = req.body; // ✅ Accept both fields

  try {
    const room = await Room.findOne({ roomNumber: roomId });
    if (!room) return res.status(404).json({ message: "Room not found" });

    // ✅ Only update status if it's valid
    if (["Pending", "Cleaning", "Completed", "No Need"].includes(status)) {
      room.status = status;
    }

    // ✅ Only update serviceType if it's valid
    if (["Checkout Room", "Dusting Room", "Room Service"].includes(serviceType)) {
      room.serviceType = serviceType;
    }

    await room.save();
    res.json({ message: `Room ${roomId} updated successfully!`, room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};