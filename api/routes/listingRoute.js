import express from "express";
import { createListing, deleteListing, updateListing } from "../controllers/createListing.js";
import { verifyToken } from "../utilis/verfiyUser.js";

const  listingrouter = express.Router();

listingrouter.get("/create",verifyToken ,createListing);
listingrouter.delete("/delete/:id",verifyToken ,deleteListing);
listingrouter.post("/update/:id",verifyToken ,updateListing);

export default listingrouter;
