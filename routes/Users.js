const express = require("express");
const { fetchUserById, updateUser } = require("../controller/User");

const router = express.Router();

// /users is deprecated

router.get("/:id", fetchUserById).patch("/:id", updateUser);

exports.router = router;
