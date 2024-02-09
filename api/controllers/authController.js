import User from "../models/userModal.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utilis/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hasedpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hasedpassword });
  try {
    await newUser.save();
    res.status(201).json("user successfully created");
  } catch (error) {
    next(error);
  }
};
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return errorhandler(404, "User not found!");
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return errorhandler(401, "Invalid Password");
  } catch (error) {
    next(error);
  }
};
