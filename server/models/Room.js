import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomNumber: { type: Number, required: true, unique: true },
  status: {
    type: String,
    enum: ["Pending", "Cleaning", "Completed", "No Need", "Checkout Room", "Dusting Room", "Room Service"], // ✅ Add service types
    default: "Pending",
  },
  serviceType: {
    type: String,
    enum: ["Checkout Room", "Dusting Room", "Room Service"], // ✅ Keep service types separate
    default: "Room Service",
  },
});

const Room = mongoose.model("Room", roomSchema);
export default Room;