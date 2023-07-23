const express = require("express");
const server = express();
const mongoose = require("mongoose");

//  Middleware

const productRouter = require("./routes/Products");
const CategoriesRouter = require("./routes/Categories");
const brandsRouter = require("./routes/Brands");

server.use(express.json());

server.use("/products", productRouter.router);
server.use("/categories", CategoriesRouter.router);
server.use("/brands", brandsRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://dbuser:dbpassword@cluster0.iydg9vp.mongodb.net/e-commerce-react"
  );
  console.log("database connected");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(8080, () => {
  console.log("server started");
});
