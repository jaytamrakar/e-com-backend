const express = require("express");
const {
  createProduct,
  fetchAllProducts,
  fetchAllProductById,
} = require("../controller/Product");

const router = express.Router();

// /products is deprecated

router
  .post("/", createProduct)
  .get("/", fetchAllProducts)
  .get("/:id", fetchAllProductById);

exports.router = router;
