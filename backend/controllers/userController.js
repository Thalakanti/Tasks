const { json } = require("body-parser");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = "Telugu";
const generateToken = (id, email) => {
  return jwt.sign({ id: id, email: email }, secretKey, { expiresIn: "24h" });
};

exports.Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new User({
      name: name,
      email: email,
      password: hashedpassword,
    });
    await user.save();

    const token = generateToken(user._id, user.email);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.Loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    const token = generateToken(user._id, user.email);

    res.status(200).json({
      success: true,
      token: token,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    // for pagination I need page number and limit
    const { page, limit } = req.query;

    // transform my operation to show me only the entries on a specific page with its limit

    // within my operation I need to write a condition which returns only the users for whom isDelete: false
    const users = await User.find({ isDeleted: false });

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
