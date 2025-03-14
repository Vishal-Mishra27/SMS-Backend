const express = require("express")
const route = express.Router();
const {
  deleteProduct,
  editProduct,
} = require("../controller/allProductController.js");

route.delete("/deleteProduct:id",deleteProduct)
route.put("/api/editProductitem/:id", editProduct);


module.exports=route;