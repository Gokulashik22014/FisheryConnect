import Fish from "../models/fish.js"

export const upload = async (req, res) => {
    try {
        const { img,name, quantity, costPerKG, location, date, time, returnTime,id } = req.body;

        // Validate required fields
        if (!quantity || !costPerKG || !location || !date || !time || !returnTime) {
            return res.status(400).json({ status: false, message: "All fields are required" });
        }

        // Create a new fish document
        const newFish = new Fish({
            img, 
            name,
            quantity,
            costPerKG,
            location,
            date,
            time,
            returnTime,
            farmerId:id
        });

        // Save to MongoDB
        await newFish.save();

        return res.json({ status: true, message: "Fish uploaded successfully", fish: newFish });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: "Failed to upload fish" });
    }
};
