import express from "express"
import { signIn,login } from "../controllers/auth.js";

const router=express.Router();

router.route("/sign-in").post(signIn)
router.route("/login").post(login)

export default router;