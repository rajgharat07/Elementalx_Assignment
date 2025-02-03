const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req,res,next) => {

    try {
        // Read the token from the req cookies
        const cookies = req.cookies;

        const {token} = cookies;

        if(!token){
            return res.status(401).send("Please login!!");
        }

        // Validate the token
        const decodedObj = await jwt.verify(token,"quantum@IT$790");

        const {_id} = decodedObj;
        // Find the user

        const user = await User.findById(_id);

        if(!user){
            throw new Error("Please Login again!!");
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(400).send("Error : " + err.message);
    }
};

module.exports = {
    userAuth,
}