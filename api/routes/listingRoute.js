import express from "express";
import { createListing } from "../controllers/createListing.js";
import { verifyToken } from "../utilis/verfiyUser.js";

const listingrouter = express.Router();

listingrouter.get("/create",verifyToken ,createListing);

export default listingrouter;
