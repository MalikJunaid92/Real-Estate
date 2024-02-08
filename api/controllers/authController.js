import User from '../models/userModal.js'
import bcryptjs from 'bcryptjs'

export const signup = async(req, res,next) => {
const {username,email,password}=req.body;
const hasedpassword= bcryptjs.hashSync(password,10)
const newUser = new User({username,email,password:hasedpassword});
try{
    await newUser.save() 
    res.status(201).json("user successfully created")
}
catch(error){
    next(error)
}
};
  