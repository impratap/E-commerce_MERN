import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>{
        console.log('====================================');
        console.log('DB connected');
        console.log('====================================');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connectDB;