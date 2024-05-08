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

module.exports = {
  createUser,
};
