const express = require("express");
const { fetchCategories, createCategory } = require("../controller/Category");

const router = express.Router();

// /Categories is deprecated

router.get("/", fetchCategories).post("/", createCategory);

exports.router = router;
