const jwt = require("jsonwebtoken");


const protect = (req, res, next) => {

    try {

        // Get token from header
        const authHeader = req.headers.authorization;


        if (!authHeader) {

            return res.status(401).json({
                message: "No token provided. Please login."
            });

        }


        // Format should be:
        // Bearer token_here

        const token = authHeader.split(" ")[1];


        if (!token) {

            return res.status(401).json({
                message: "Invalid token format"
            });

        }



        // Verify token

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );



        // Store user information

        req.user = decoded;



        // Continue request

        next();



    } catch (error) {


        return res.status(401).json({

            message: "Invalid or expired token"

        });


    }

};



module.exports = protect;