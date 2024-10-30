import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d4/d4044d2e1524b2cea8c519c3bdae89c5cc25f919.jpg"
    },
},
{timestamps:true}
)

const User = mongoose.model('User',userSchema)

export default User;