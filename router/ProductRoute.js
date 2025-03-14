const express = require("express")
const route = express.Router();
const {addProduct,showProduct} = require("../controller/productController.js")

route.post("/api/postProduct",addProduct);
route.get("/api/getProduct",showProduct)
module.exports=route;





  

  