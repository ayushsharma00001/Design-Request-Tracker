import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"
dotenv.config();
const app = express();

const __dirname = path.resolve();


app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import { connectDB } from "./db/connection.js";
import requestRoutes from "./routes/requestRoutes.js";
app.use("/api/requests", requestRoutes);



app.use(express.static(path.join(__dirname,"frontend","dist")))
app.all("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
});


app.listen(process.env.PORT || 3000, async () => {
  await connectDB();
  console.log("Server is running");
});
