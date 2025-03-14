// import Seller from "./Model/sellModel";
const Seller =require("../model/sellModel.js");

const Sellitem=async (req, res) => {
  try {
    const {
        customerName,
        productName,
        quantity,
        price,
        totalPrice,
        finalPrice
    } = req.body;
    const user = new Seller({
        customerName,
        productName,
        quantity,
        price,
        totalPrice,
        finalPrice
    });
    const data = await user.save();
    res.status(200).json({ message: "User saved", user: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User not saved", error });
  }
};

const getsell= async (req, res) => {
  try {
    const user = await Seller.find();
    res.status(200).json({ message: user });
  } catch (error) {
    console.error("error to get data", error);
    res.status(500).json({ message: "error to get data", err: error });
  }
};

const editsell=async (req,res)=>{
    try{
        const { id } = req.params;
        const { customerName,
            productName,
            quantity,
            price,
            totalPrice,
            finalPrice}=req.body

      const updateData = {
        customerName,
        productName,
        quantity,
        price,
        totalPrice,
        finalPrice
      };

      const saveUpdatedData=await Seller.findByIdAndUpdate(id,updateData,{
        new:true
      })

      if(!saveUpdatedData){
      return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json({message:"Data edited",user:saveUpdatedData})

    }catch(error){
        console.error(error)
    }
}

const deleteSell=async(req,res)=>{
    try{
        const {id}=req.params
        const deletesell=await Seller.findByIdAndDelete(id)
        if(!deletesell){
            res.status(500).json({message:"Sell not deleted"})
        }
        res.status(200).json({message:"Data is deleted",user:deletesell})
    }catch(errro){

    }
}

module.exports = { Sellitem, getsell, editsell, deleteSell};