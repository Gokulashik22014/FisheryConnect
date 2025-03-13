import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["fisherman", "customer"], // Restricts values
        required: true,
    }
});

const Users = mongoose.model("Users", userSchema);
export default Users;
