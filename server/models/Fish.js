import mongoose from "mongoose";

const fishSchema=new mongoose.Schema({
   img:String,
   quantity:Number,
   costPerKG:Number,
   location:String,
   date:Date,
   time:Timestamp,
   returnTime:Timestamp
})

const Fish=mongoose.model("Fish", fishSchema);
export default Fish;