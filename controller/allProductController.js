const Product = require("../model/productModel.js")


const deleteProduct =async (req,res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.json({ message: "Product deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error Occurs" });
      }
}

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
  price,
productName,
quantity,
totalPrice,
venderName
    } = req.body;

    const updateData = {
      price,
      productName,
      quantity,
      totalPrice,
      venderName,
    };

    const saveUpdatedData = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!saveUpdatedData) {
      return res.status(404).json({ message: "Product not found 1" , user:saveUpdatedData});
    }

    res.status(200).json({ message: "Data edited", user: saveUpdatedData });
  } catch (error) {
    console.error(error);
  }
};
module.exports = { deleteProduct, editProduct};