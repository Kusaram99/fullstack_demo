import mongoose from 'mongoose';

// MongoDB connection URL
const url = 'mongodb://127.0.0.1:27017/demo';



const connectDB = async ()=>{

    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(url, { 
            useNewUrlParser: true, // Use the new URL parser
            useUnifiedTopology: true // Use the new server discovery and monitoring engine
        });
        
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Connection error:', error);
    }

    // Connect to MongoDB using Mongoose
    // await mongoose.connect(url, { 
    //     useNewUrlParser: true, // Use the new URL parser
    //     useUnifiedTopology: true // Use the new server discovery and monitoring engine
    // });
    
    // Get the default connection
    // const db = mongoose.connection;
    
    // // Handle connection errors
    // db.on('error', (error) => {
    //     console.error('Connection error:', error);
    // });
    
    // // Log a message when the connection is successfully opened
    // db.once('open', () => {
    //     console.log('Connected to MongoDB');
    // });
}



export default connectDB;