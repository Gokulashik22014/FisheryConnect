import mongoose from "mongoose";

const customerSchema=new mongoose.Schema({
    
})

const Customers=mongoose.model("Customers", customerSchema);
export default Customers;