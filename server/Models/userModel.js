const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter firstName"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: [true, "please enter your email"],
    },
    password: {
      type: String,
      required: [true, "please enter password"],
      trim: true,
      minLength: 8,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, "please enter password"],
      trim: true,
      minLength: 8,
      select: false,
      validator: function (value) {
        return value == this.password;
      },
      message: "password does not match",
    },
  },
  { timeStamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
