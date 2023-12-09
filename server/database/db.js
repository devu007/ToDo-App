import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME=process.env.MONGODB_USER;
const PASSWORD=process.env.MONGODB_PASSWORD;

export const Connection=()=>{

    const MONGODB_URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster30127.yq7hvyx.mongodb.net/ToDo?retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URL);

    mongoose.connection.on('connected',()=>{
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Disconnected');
    })

    mongoose.connection.on('error',()=>{
        console.log('Error while connecting with database',error.message);
    })
}

export default Connection;