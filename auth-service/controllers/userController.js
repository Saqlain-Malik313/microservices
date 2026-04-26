const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================
const register = async (req, res) => {
  const { name, email,phone, password } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Already have account" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const userdata = await User.create({
      name,
      email,
      password: hashpassword,
      phone,
    });

    return res.status(201).json({
      message: "User created successfully",
      userdata,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ================= LOGIN =================
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      process.env.JWT_SECRET,   
      { expiresIn: "2d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getuser = async (req, res) => {
  try {
    const id = req.user.id;

    const user = await User.findById(id).select("-password");

    return res.status(200).json({ user });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      message: "Logout successful",
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  getuser,
  logout,
};