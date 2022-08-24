const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        // mongoose connection string
       const con = await mongoose.connect(process.env.MONGO_URL,{
        useNewurlParser:true,
        useUnifiedTropology:true,
        UseCreateIndex:true
       })
       console.log('monogo connect: ${con.connation.host}');
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.export = connectDB