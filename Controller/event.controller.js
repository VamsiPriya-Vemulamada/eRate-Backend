import Event from "../models/Event.js"
import participant from "../models/Participant.js"
// for creating an event
export const createEvent = async (req,res) => {
    try{
        const{ eventname,date,location,createdBy} = req.body;
        const newEvent = new Event({
            eventname,date,location,createdBy
        });
        const savedEvent = await newEvent.save();
        res.status(201).json({
            message: "Event created successfully",
            event: savedEvent
        }); 
    }

    catch (error) {
        console.error("Error creating event:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
// Adding the participant

export const addParticipatoEvent = async(req, res) => {
    try {
        const { fullname, email, status } = req.body; 
        const { eventId } = req.params;

        // Find the event by ID
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
    
     // Create a new participant
     const participant = new participant({
        fullname,
        email,
        status,
        event: eventId
        
    });
// Save the participant to the database
const savedParticipant = await participant.save();

// Add the participant to the event's participants array
event.participants.push(savedParticipant._id);
await event.save();

res.status(201).json({
    message: "Participant added to event successfully",
    participant: savedParticipant
});

}


// Error Message
catch (error) {
    console.error("Error adding participant to event:", error.message);
    res.status(500).json({ message: "Internal server error" });
}
}
// Updating the participants

export const updateParticipant = async(req,res)=>{
    try{
        const {eventId} = req.params; // URL parameters
        const { participants} = req.body; // client request participants from request body
        
        const event = await Event.findById(eventId);
        if(!event){
            return res.status(404).json({ message: "Event not found" });
        }
        // Update participants (overwrite existing participants or append new ones)
        event.participants = participants;

        // Save the updated event
        await event.save();

        res.status(200).json({ message: "Participants updated successfully", event });
    } catch (error) {
        console.error("Error updating participants:", error.message);
        res.status(500).json({ message: "Internal server error" });  
    }
}

