const express = require("express")
const route = express.Router();
const {
  addNewVender,
  getVender,
  deleteVender,
  editsell,
} = require("../controller/venderController.js");

route.post("/addNewVender",addNewVender);
route.get("/addNewVender",getVender)
route.delete("/DeleteVender:id",deleteVender)
route.put("/api/editVender/:id", editsell);
module.exports=route;





  

  