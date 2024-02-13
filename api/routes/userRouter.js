import express from "express";
import { test, updateUser } from "../controllers/userControllers.js";
import { verifyToken } from "../utilis/verfiyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken,updateUser);

export default router;
