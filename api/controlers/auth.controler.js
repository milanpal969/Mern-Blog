import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            msg: "All fields are required"
        });
    }
    
    const hashpassword = bcryptjs.hashSync(password);
    try {
        const newUser = await User.create({
            username,
            email,
            password:hashpassword
        });

        return res.status(201).json({
            msg: "User created successfully",
            user: newUser
        });
    }catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({
            msg: "Internal server error"
        });
    }
};
