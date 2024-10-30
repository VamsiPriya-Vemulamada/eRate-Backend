import mongoose from "mongoose";
import participant from "./Participant.js";

// creating event Schema
const eventSchema = new mongoose.Schema({
    eventname:{
        type:String,
        required: true,
},
    date:{
        type:String,
        required:true,
    },

    location:{
        type:String,
        required:true,
    },
    // // participants: [participant], // Array of participants using the participant schema
    // // updatedAt: {
    // //     type: Date,
    // //     default: Date.now
    // }
    
});

// Middleware to update the updatedAt field before saving
// This is used to save the information and update with date
eventSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Event = mongoose.model("Events", eventSchema)
export default Event;

