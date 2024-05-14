const express = require("express");
const app = express();
const router = express.Router();

const { createUser, getUser } = require("../Controller/userController");
const { loginUser } = require("../Controller/userController");

// CREATE USER
router.route("/createUser").post(createUser);

// get users

router.route("/getUser").get(getUser);

// LOGIN
router.route("/loginUser").post(loginUser);

// UPDATE PASSWPRD

module.exports = router;
