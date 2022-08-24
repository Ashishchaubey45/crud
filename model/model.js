//API
const mongoDB = require('mongoose');
const scheme = new mongoose.scheme
({
    name:{
        type: String,
        requred:true 
    },
    email:{
        type:string,
        required:true,
        unique:true 
    },
    Gender:{
        type:string,
        status:string
    }
})
const userDB = monogoose.model('userDB',scheme);
module.exports=userDB


























