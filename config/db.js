import monggose from 'mongoose';

const connectDb = async ()=>{
    try {
        await monggose.connect(process.env.MONGO_URI);
        console.log(`Connected to Mongodb`);
    } catch(error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDb;
