import {Router} from "express" ;

import { signup, login } from "../Controller/user.controller.js"
const router = new Router();

// CURD OPERATIONS
//GET Method: READ
// Create
router.post("/signup", signup);
router.post("/login", login);
export default router;