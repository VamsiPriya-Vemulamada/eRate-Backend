import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.js"
import eventRouter from "./routes/event.js"

//======== setting environment variables=========
dotenv.config();
const app = express()
const PORT = process.env.PORT;

//======== connecting to DB ========
try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connected to mongodb`);
}
catch(error){
    console.log(error);
}

//========== Middleware =======
app.use(morgan('dev')); // used for monitoring
app.use(express.json()); // parse data to the body
app.use(express.urlencoded({extended: true})); // for url

//=========== ROUTES ==================
app.use("/user",userRouter);
app.use("/events", eventRouter);
app.get('/', (req,res)=>
    {
        res.send("Welcome to the API")
    });
// ========== ERROR Middlewares=======
app.use((e, req, res,next)=>{
    console.error(e);
    res.status(500).json({message:e.message, error:e})
    });


// =========Listening to the PORT=========
app.listen(PORT,()=> console.log(`Server running on the port: ${PORT}`))