import express from "express"
import { getAllFish, getSingleFish, placeOrder } from "../controllers/cutomer.js";


const router=express.Router();

router.route("/allfish").get(getAllFish)
router.route("/singlefish/:id").get(getSingleFish)
router.route("/placeorder").post(placeOrder)
export default router;