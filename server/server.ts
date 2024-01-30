import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv";
import userRouter from "./routes/todo.routes";
import cors from "cors"
dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
app.use(userRouter)
const PORT:number=7700
app.listen(PORT,()=>{
    console.log("Server is running on port 7800");
})
