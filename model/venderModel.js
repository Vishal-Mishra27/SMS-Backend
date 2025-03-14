const mongoose = require('mongoose');
const venderSchema=mongoose.Schema({
    name:{type:String,required:true},
    mobile:{type:Number,require:true},
})
const venderModel=mongoose.model('vender',venderSchema);
module.exports=venderModel;