const  Register = require("../models/register")
const express = require("express")
const router = express.Router();

router.post("/registermodule",async(req,res)=>{
    try{
        const {name, email, contact , message} =req.body
        console.log (name, email, contact , message)
        if( !name||!email || !contact || !message ){
            return res.json({ success : false, message : "please filla alla field"});
        }

        const existingemail = await Register.findOne({email})


        console.log("extisting",  existingemail)
      if (existingemail) {
    return res.json({
        success: false,
        message: "Email already exists"
    });
}

const newRegister = new Register({
    name,
    email,
    contact,
    message
});

const saveRegister = await newRegister.save();

if (!saveRegister) {
    return res.json({
        success: false,
        message: "Failed to register"
    });
}

return res.json({
    success: true,
    message: "Registration successful"
});
    }catch(err){
        console.error(err);
        return res.json({success : false, message : "failled to register"})

    }
})
