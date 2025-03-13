import Fish from "../models/fish.js";
import Orders from "../models/orders.js";
import Users from "../models/users.js";


export const getAllFish = async (req, res) => {
    try {
        const fishList = await Fish.find(); // Fetch all fish records

        if (!fishList.length) {
            return res.status(404).json({ status: false, message: "No fish found" });
        }

        return res.json({ status: true, fish: fishList });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, message: "Failed to fetch fish" });
    }
};
export const getSingleFish=async(req,res)=>{
    try {
        const {id}=req.params
        console.log(req.params)
        const fish = await Fish.findOne({_id:id}); 

        if (!fish) {
            return res.status(404).json({ status: false, message: "No fish found" });
        }
        return res.json({ status: true, fish });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, message: "Failed to fetch fish" });
    }
}

export const placeOrder = async (req, res) => { 
    try {
        const { custId, fishId, quantity } = req.body;

        // Validate request data
        if (!custId || !fishId || !quantity || quantity <= 0) {
            return res.status(400).json({ status: false, message: "Invalid input data" });
        }

        // Find customer
        const customer = await Users.findById(custId);
        if (!customer) {
            return res.status(404).json({ status: false, message: "Customer not found" });
        }

        // Find fish
        const fish = await Fish.findById(fishId);
        if (!fish) {
            return res.status(404).json({ status: false, message: "Fish not found" });
        }

        // Check if enough quantity is available
        if (fish.quantity < quantity) {
            return res.status(400).json({ status: false, message: "Not enough fish available" });
        }

        // Calculate total price
        const price = fish.costPerKG * quantity;

        // Create new order
        const newOrder = new Orders({
            customerId: custId,
            fishermanId: fish.fishermanId, // Assuming each fish belongs to a fisherman
            fishId: fishId,
            quantity,
            price
        });

        await newOrder.save();

        // Update fish quantity in database
        fish.quantity -= quantity;
        await fish.save();

        return res.status(201).json({ status: true, message: "Order placed successfully", order: newOrder });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Failed to place order" });
    }
};