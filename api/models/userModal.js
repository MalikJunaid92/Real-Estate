import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type:String,
      default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO12gtxAFj4jl2FWYvxg7Ck-LrxbC4z_cC6xhwUsiJbZViBBXC1WrqfEgC4Q&s"
    }
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema, "users");
export default User;
