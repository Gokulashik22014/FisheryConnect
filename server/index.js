import expess from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"

//custom routers
import userRouter from "./routes/auth.js"
import fishmanRouter from "./routes/fiherman.js"
import customerRouter from "./routes/customer.js"


const app=expess()
app.use(expess.json())
app.use(cors())
dotenv.config()

app.get("/",(req,res)=>{
    return res.json({message:"success"})
})

//user
app.use("/user",userRouter)
//fishermen
app.use("/fisherman",fishmanRouter)
//customer
app.use("/customer",customerRouter)


mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT, () => console.log(`The server is running at ${process.env.PORT}....`))
  )
  .catch((error) => console.log(error));