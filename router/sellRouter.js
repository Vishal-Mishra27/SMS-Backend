// import Sellitem from "../Controller/sellController.js";
// const Sellitem =require( "../Controller/sellController.js");
// const getsell =require( "../Controller/sellController.js");
// import getsell from "../Controller/sellController.js"
const {
    Sellitem,
    getsell,
    editsell,
    deleteSell
  } = require("../controller/sellItem.js");
  
  const express=require('express')
  
  const router = express.Router();
  
  
  router.post("/api/sellitem",Sellitem)
  router.get("/api/getsellitem", getsell);
  router.put("/api/editsellitem/:id", editsell);
  router.delete("/api/deletesellitem/:id", deleteSell);
  
  module.exports=router