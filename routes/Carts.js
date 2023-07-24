const express = require("express");
const {
  addToCart,
  fetchCartByUser,
  deleteCart,
  updateCart,
} = require("../controller/Cart");

const router = express.Router();

// /products is deprecated

router
  .post("/", addToCart)
  .get("/", fetchCartByUser)
  .delete("/:id", deleteCart)
  .patch("/:id", updateCart);

exports.router = router;
