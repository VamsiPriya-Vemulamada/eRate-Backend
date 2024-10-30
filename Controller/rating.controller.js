import {Rating}  from "../models/Rating.js";
// Rating
export const rating = async(req, res) => {
    try {
        // Extract fullname, email, and password from the request body
        const { username, email, stars,location, eventname } = req.body;
        console.log(username,email,stars,location, eventname)
        // Check if a user with the given email already exists in the database
        const rating = await Rating.findOne({ email });
        console.log(rating)
        if (rating) {
            // If user already exists, return a 400 Bad Request response with an error message
            return res.status(400).json({ message: "Rating already exists" });
        }
    
        const createdUserRating = new Rating({
            username: username,
            email: email,
            stars: stars,
            location: location,
            eventname: eventname
        });
        console.log(createdUserRating)
        // save for the user database
        await createdUserRating.save();
        res.status(201).json({
            message: "Rating created successfully",
            rating: {
                _id: createdUserRating._id,
                email: createdUserRating.email,
                stars:createdUserRating.stars,
                location: createdUserRating.location,
                eventname: createdUserRating.eventname
            },
        });
    } catch (error) {
        console.log("Error: " + error.message + "coming here 1");
        res.status(500).json({ message: error.message + "coming here"});
    }
};