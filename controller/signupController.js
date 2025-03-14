const Signup = require("../model/signUpModel.js");

const addNewSignup= async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "all field is required" });
    }
    const signup = new Signup({ name, email, password });
    const data =await signup.save();
    res.json({ message: "Admin added successfully" ,  user:data});
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error Occurs" });
  }
};
// get Admin
const getSignup = async (req, res) => {
  const signup = await Signup.find();
  res.status(200).json({ message: signup });
};

// const getLogin = async (req, res) => {
//     try {
//     const {email, password } = req.body;
// const admin = await Signup.findOne({ email });
// if(!admin){
//     res.status(500).json({message:"admin not existed"})
// }

// if(password==admin.password){
//     res.status(500).json({message:"password is not coorect"})
// }
// console.log(admin.password);
//   res
//     .status(200)
//     .json({ message: "login succesfull", user: admin});
//     }catch(error){
//         console.error("errror is: ",error)
//     }
// };
const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await Signup.findOne({ email });

    // If admin does not exist
    if (!admin) {
      return res.status(404).json({ message: "Admin does not exist" });
    }

    // Compare passwords directly (⚠️ Not secure, recommended to use hashing)
    if (password != admin.password) {
      return res.status(401).json({ message: "Password is incorrect", user:password });
    }

    // console.log(admin.password);

    // Send success response
    return res.status(200).json({ message: "Login successful", user: admin });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = { addNewSignup, getSignup, getLogin };
