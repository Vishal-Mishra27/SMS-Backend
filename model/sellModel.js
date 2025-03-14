const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    productName: { type: String, required: true },
    quantity: { type: Number, requied: true },
    price: { type: Number, requied: true },
    totalPrice: { type: Number, requied: true },
    finalPrice: { type: Number, requied: true }
});

const Seller = mongoose.model("Sell", userSchema);

module.exports=Seller
