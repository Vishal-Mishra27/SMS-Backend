const mongoose = require('mongoose');
const signup=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{
        type:Number,
        required:true
    }
})
const signupModel = mongoose.model("Signup", signup);
module.exports = signupModel;