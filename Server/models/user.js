const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        id:{
            type: Number,
            default: 1,
        },
        username: {
            type: String,
            unique:true
        },
        email: {
            type: String,
            default: null

        },
        phone:{
            type: String,
            default: null

        },
        FirstName: {
            type: String,
            default: null

        },
        LastName: {
            type: String,
            default: null
        },
        bankAccount:{
            type:String ,
          }
      
    },
    
);

const User = mongoose.model("User", userSchema);
module.exports = User;

