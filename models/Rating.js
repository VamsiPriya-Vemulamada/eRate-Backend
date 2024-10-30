import mongoose from "mongoose";

import validator from 'validator' // this is used for the library to validate the files and install the package using npm install validator

// creating RatingSchema
const ratingSchema = new mongoose.Schema({
eventname:{
    type:String,
    required: true
},

Date:   
{
    type:String,
    required:true
},
location:{
    type:String,
    required:true
},

}, {timestamps: true});

export const Rating = mongoose.model("Rating", ratingSchema)