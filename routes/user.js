import {Router} from "express" ;

import { signup, login } from "../Controller/user.controller.js"
const router = new Router();

// CRUD OPERATIONS
//GET Method: READ
// Post Method: Create
// creating signup
// posting signup
router.post("/signup", signup);
// posting Login
router.post("/login", login);
router.get("/login",login)

 

export default router;