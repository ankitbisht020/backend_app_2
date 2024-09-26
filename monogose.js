const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL);
   

const user=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    imageurl:String
})
module.exports= mongoose.model("user",user);