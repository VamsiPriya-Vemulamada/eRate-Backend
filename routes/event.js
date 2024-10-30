import {Router} from "express" ;
import Event from "../models/Event.js"

// import {createEvent, addParticipatoEvent, updateParticipant} from "../Controller/event.controller.js"

const router = new Router();
// get events
router.get("/", async (req, res, next) => {
    try {
      const events = await Event.find();
  
      if (events) {
        res.json({ events });
      } else {
        res.json({ message: "No events found" });
      }
    } catch (error) {
      next(error);
    }
  });

// get events by id

router.get("/:id", async (req, res, next) => {
    try {
      const events = await Event.findById(req.params.id);
  
      if (events) {
        res.json({ events });
      } else {
        res.json({ message: `No events found with id: ${req.params.id}` });
      }
    } catch (error) {
      next(error);
    }
  });
// ========== post =========== //
  router.post("/", async (req, res, next) => {
    try {
      console.log(req.body);
  
      const events = await Event.create(req.body);
  console.log(events)
      if (events) {
        res.status(201).json({events });
      } else {
        res.status(400).json({ message: "Error creating new Event" });
      }
    } catch (error) {
      next(error);
    }
  });
  
//================ put ====================//
router.put("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const updatedEvents = await Event.findByIdAndUpdate(id, body, {
        new: true,
      });
      if (updatedEvents) {
        res.json({ updatedEvents });
      } else {
        res.json({ message: `Error updating event: ${req.params.id}` });
      }
    } catch (error) {
      next(error);
    }
  });
  /**
 * DELETE /api/projects/:id
 */
router.delete("/:id", async (req, res, next) => {
    try {
      const deletedevent = await Project.findByIdAndDelete(req.params.id);
  
      if (deletedevent) {
        res.json({
          message: `deletedevent: ${req.params.id}`,
          deletedProject,
        });
      } else {
        res.json({ message: `Error deleting event: ${req.params.id}` });
      }
    } catch (error) {
      next(error);
    }
  })

  

export default router;