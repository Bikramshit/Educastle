import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from 'cloudinary';
import Razorpay from 'razorpay';
import nodeCron from 'node-cron';
import { Stats } from "./models/Stats.js";

const port = process.env.PORT;

cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  nodeCron.schedule("0 0 0 1 * *",async ()=>{
    try {
        await Stats.create({});
    } catch (err) {
        console.error(err);
    }
  });

 

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})

connectDB();






