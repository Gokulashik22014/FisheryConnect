import express from "express"
import { upload } from "../controllers/fisherman.js";

const router=express.Router();

router.route("/upload").post(upload)
export default router;