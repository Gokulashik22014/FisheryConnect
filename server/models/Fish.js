import mongoose, { Schema } from "mongoose";

const fishSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    name:{
        type:String,
        required:true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    costPerKG: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: Date, // MongoDB uses Date for timestamps
        required: true,
    },
    returnTime: {
        type: Date, // Same here
        required: true,
    },
    farmerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Fishermen"
    }
});

const Fish = mongoose.model("Fish", fishSchema);
export default Fish;
