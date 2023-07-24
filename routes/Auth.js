const express = require("express");
const { createUser, loginUser } = require("../controller/Auth");

const router = express.Router();

// /users is deprecated

router.post("/signup", createUser).post("/login", loginUser);

exports.router = router;
