const express = require("express");
const connectDB = require("./db/db.js")
const vender = require("./router/VenderRoute.js")
const product=require("./router/ProductRoute.js")
const deleteAllProduct = require("./router/allProductRoute.js")
const editProduct= require("./router/allProductRoute.js")
const editsell =require("./router/VenderRoute.js")
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors());

const port = 3000;
connectDB;
app.use("/api",vender)

app.use("/api/product",product)
app.use("/api/editvender",editsell)
app.use("/deleteProduct",deleteAllProduct)
app.use("/api/editProduct", editProduct);

const sell=require("./router/sellRouter.js")
app.use("/api/sell",sell)

const signup = require("./router/signupRouter.js");
app.use("/signup",signup)



app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

