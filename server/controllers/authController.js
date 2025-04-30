import User from "../models/User.js";

// Sign-Up with phone number
export const signUp = async (req, res) => {
  const { phoneNumber, name } = req.body;
 

  try {
    let user = await User.findOne({ phoneNumber });
    if (user) return res.status(400).json({ message: "Phone number already registered" });

    user = new User({ phoneNumber, name });
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
    const { phoneNumber } = req.body;
  
    try {
      const user = await User.findOne({ phoneNumber });
      if (!user) return res.status(404).json({ message: "User not found, please sign up" });
  
      res.status(200).json({ message: "Sign-in successful", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };