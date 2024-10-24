import mongoose from "mongoose";

import validator from 'validator' // this is used for the library to validate the files and install the package using npm install validator

const userSchema = new mongoose.Schema({
username:{
    type:String,
    required: true,
    minlength: [3, "Name must contain at least 3 characters!"],
    maxlength: 30,
},
email:{
    type:String,
    required:true,
    unique: true,
    validate: [validator.isEmail, "Please provide valid email!"],
},
password:
{
type:String,
    required:true,
    unique: true,
    minlength: 3,
    
}

}, {timestamps: true});

export const User = mongoose.model("Users", userSchema)