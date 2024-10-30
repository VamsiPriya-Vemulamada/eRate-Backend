import {Router} from "express" ;
import {Rating}  from "../models/Rating.js";

// import { rating } from "../Controller/rating.controller.js"
const router = new Router();


/**
 * GET /api/projects/
 * @description fetches all projects
 */
router.get("/", async (req, res, next) => {
    try {
      const projects = await Project.find();
  
      if (projects) {
        res.json({ projects });
      } else {
        res.json({ message: "No projects found" });
      }
    } catch (error) {
      next(error);
    }
  });




export default router;