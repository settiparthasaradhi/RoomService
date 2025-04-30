import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{10}$/, // Validates a 10-digit phone number
  },
  name: {
    type: String,
    required: true,
  },
  otp: {
    type: String, // Store OTP temporarily for authentication
    required: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
export default User;