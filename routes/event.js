import {Router} from "express" ;

import {createEvent, addParticipatoEvent} from "../Controller/event.controller.js"

const router = new Router();

// Route for creating a new event with Post method
router.post('/createevent', createEvent);

// Route for adding a participant to an event
router.post('/:eventId/participants', addParticipatoEvent);

// Route for updating the participants(UPDATE)
router.PUT('/:eventId/participants', updateParticipant)

export default router;