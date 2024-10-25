import mongoose from 'mongoose';

// Define the Participant schema
const participantSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['invited', 'attending', 'declined'],
        default: 'invited'
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event' // Reference to the Event model
    }
}, { timestamps: true });

const Participant = mongoose.model('Participant', participantSchema);

export default Participant;