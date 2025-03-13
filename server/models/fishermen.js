import mongoose from "mongoose";

const fishermanSchema = new mongoose.Schema({
   
});

const Fishermen = mongoose.model("Fishermen", fishermanSchema);
export default Fishermen;