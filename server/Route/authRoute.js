const express = require("express");
const app = express();
const router = express.Router();

const { createUser } = require("../Controller/userController");

// CREATE USER
router.route("/createUser").post(createUser);

// LOGIN
router.route("/login").post();

// UPDATE PASSWPRD

module.exports = router;
