const User = require("../Models/userModel");

const createUser = async (req, res) => {
  try {
    console.log(req.body);

    const { username, email, password, confirmPassword } = req.body;

    const user = await User.create({
      username,
      email,
      password,
      confirmPassword,
    });
    console.log(user);
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error);
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

    const user = await User.findOne({ email: email }).select({ password });
    console.log(user);

    if (!user) {
      // User not found
      return res.status(401).json({ message: "User not found" });
    }

    if (user && user.password === password) {
      res.status(200).json({
        status: "success",
        user,
      });
    } else {
      // Incorrect password
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Login successful
    // Generate JWT token or set session
    // Return response

    // console.log(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  loginUser,
  getUser,
};
