import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventname:{
        type:String,
        required: true,
},
date:{
        type:Date,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
  Guests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model for participants
    }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:'true',
    },
    createdAt: {
        type: Date,
        default: Date.now, // Set to the current date by default
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Set to the current date by default
    },

});

// Middleware to update the updatedAt field before saving
// This is used to save the information and update with date
eventSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});


const Event = mongoose.model("Events", eventSchema)