const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

// const User = require("./Models/userModel");
// const { createUser } = require("./Controller/userController");
const authRoute = require("./Route/authRoute");

mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Mongodb connected and Listening on the port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/auth", authRoute);
