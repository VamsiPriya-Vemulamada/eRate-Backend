import {User}  from "../models/User.js";
import bcryptjs from "bcryptjs"; // Import bcryptjs library for password hashing and comparison
// SignUp
export const signup = async(req, res) => {
    try {
        // Extract fullname, email, and password from the request body
        const { username, email, password } = req.body;
        // Check if a user with the given email already exists in the database
        const user = await User.findOne({ email });
        if (user) {
            // If user already exists, return a 400 Bad Request response with an error message
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash the user's password before saving it to the database
        const hashPassword = await bcryptjs.hash(password, 10);
        // create the password
        const createdUser = new User({
            username: username,
            email: email,
            password: hashPassword,
        });
        // save for the user database
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login controller function for authenticating a user
export const login = async(req, res) => {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;
         // Find the user by email in the database
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } 
    // Log the error to the server console and return a 500 Internal Server Error response
    catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};