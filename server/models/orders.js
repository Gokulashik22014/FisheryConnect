import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customers", // Foreign key reference
        required: true,
    },
    fishermanId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Fishermen"
    },
    fishId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fish", // References Fish collection
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    }
});

const Orders = mongoose.model("Orders", orderSchema);
export default Orders;
