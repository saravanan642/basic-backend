const mongoose =require("mongoose");

const registerSchema = new mongoose.Schema({
    name : {type : String , require : true},
    email : {type : String , require :true , unique : true},
    contact : {type : String, require :true , unique : true},  
    message : {type : String , require : true }
 
})

const Register = mongoose.model ("sample register ", registerSchema);
module.exports = Register;

