const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      // await mongoose.connect(
      //   `mongodb://localhost:27017/NishantSells`
      // );
      await mongoose.connect(
        `mongodb+srv://vishalmishra27:2WZtqrV7JIIjbFqk@cluster0.xuqtp.mongodb.net/`
      );
      console.log("MongoDB Connected Successfully ✅");
    } catch (error) {
      console.error("MongoDB Connection Error ❌:", error);
      process.exit(1); // Exit process if connection fails
    }
  };
  module.exports = connectDB();