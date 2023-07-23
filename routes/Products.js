const express = require("express");
const { createProduct, fetchAllProducts } = require("../controller/Product");

const router = express.Router();

// /products is deprecated

router.post("/", createProduct).get("/", fetchAllProducts);

exports.router = router;
