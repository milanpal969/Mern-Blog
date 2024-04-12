import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

  console.log('Received data:', req.body); 

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


export const signin = async (req,res)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return res.send("Invalid Inputs");
    }

    try{
    const validUser = await User.findOne({email});

    const validPassword = bcryptjs.compareSync(password,validUser.password);
    if(!validUser  || !validPassword){
        res.status(404).json({
            msg:"user not found"
        })
    
    }else{

        const token = jwt.sign({id:validUser._id},process.env.jwtPassword);

        res.status(200).json(token);

    }

    }
    catch(err){
        res.status(500).json({
            msg:"somthing is up with our server"
        })
    }

};


export const googleAuth = async (req,res) => {

    const {name, email, photoUrl} = req.body;

    try{
        const chk = await User.findOne({email});

        if(chk){
            const token = jwt.sign({id:chk._id},process.env.jwtPassword);
            res.status(200).json(token);

        }else{
            const generatedPassword = Math.random().toString().slice(-8);
            const hashpassword = bcryptjs.hashSync(generatedPassword,8);

            const newUser = User.create({
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password:hashpassword,
                profilePic:photoUrl
        });
        await newUser.save();
        const token = jwt.sign({id:newUser._id},process.env.jwtPassword);
        res.status(200).json(token);
        }
    }
    catch(err){
        console.log(err);
    }
}