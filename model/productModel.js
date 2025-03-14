const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  price: { type: Number, requied: true },
  productName: { type: String, required: true },
  quantity: { type: Number, requied: true },
  totalPrice: { type: Number, required: true },
  venderName: { type: String, required: true },
});
const Product = mongoose.model("Product", userSchema);
module.exports = Product;
