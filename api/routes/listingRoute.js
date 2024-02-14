import express from "express";
import { createListing, deleteListing, getListing, updateListing } from "../controllers/createListing.js";
import { verifyToken } from "../utilis/verfiyUser.js";

const  listingrouter = express.Router();

listingrouter.get("/create",verifyToken ,createListing);
listingrouter.delete("/delete/:id",verifyToken ,deleteListing);
listingrouter.post("/update/:id",verifyToken ,updateListing);
listingrouter.get("/get/:id",getListing);

export default listingrouter;
