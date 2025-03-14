const Product = require("../model/productModel.js")

const addProduct=async (req, res) => {
    try {
      const {price,
        productName,
        quantity,
        totalPrice,
        venderName} = req.body;

      const user = new Product({
        price,
        productName,
        quantity,
        totalPrice,
        venderName
      });
      const data = await user.save();
      res.status(200).json({ message: "User saved", user: data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "User not saved", error });
    }
  };
  
  const showProduct=async(req,res)=>{
      try{
          const user=await Product.find()
          res.status(200).json({message:user})
      }
      catch(error){
          console.error("error to get data",error)
          res.status(500).json({ message: "error to get data", err:error });
      }
  }
  
module.exports={addProduct,showProduct}
