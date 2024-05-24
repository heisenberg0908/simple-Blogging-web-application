const mongoose=require('mongoose')
mongoose.connect('')//add ur mongodb connection string here

const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    password:String
})

const blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    createdAt: { type: Date, default: Date.now } 
})

const Users=mongoose.model("Users",userSchema)
const Blogs=mongoose.model("Blogs",blogSchema)

module.exports={
    Users,
    Blogs
}


