import mongoose from "mongoose";
import { string } from "prop-types";

userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:string,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true});

const user = mongoose.model('user',userSchema);

export default user