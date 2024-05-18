const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    // console.log(req.body);
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ status: "fail", message: "Passwords do not match!" });
    }

    const hashPassword = await bcrypt.hash(password, 13);
    console.log(hashPassword);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    console.log(user);
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating the user.",
    });
  }
};

const getUser = async (req, res) => {
  const user = await User.find();

  // console.log(user);

  res.status(200).json({
    status: "true",
    user,
  });
};

const loginUser = async (req, res) => {
  try {
    // console.log(req.body);

    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.findOne({ email: email }).select("+password");
    console.log(user);

    if (!user) {
      // User not found
      // res.send("No such user.");
      return res.status(401).json({ message: "User not found" });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      // res.send("wrong password");
      return res.status(401).json({ message: "wrong password" });
    }

    return res.status(200).json({ message: "Login successful", user });

    // Login successful
    // Generate JWT token or set session
    // Return response

    // console.log(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while logging in the user.",
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
};
