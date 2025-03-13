import expess from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
const app=expess()
app.use(expess.json())
app.use(cors())
dotenv.config()

app.get("/",(req,res)=>{
    return res.json({message:"success"})
})

//fishermen

//customer


mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT, () => console.log(`The server is running at ${process.env.PORT}....`))
  )
  .catch((error) => console.log(error));