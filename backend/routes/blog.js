const express=require("express")
const zod=require('zod')
const { Blogs } = require("../db")
const blogRouter=express.Router()


const blogpostdata=zod.object({
    title:zod.string(),
    content:zod.string()
})
blogRouter.post('/blog',async(req,res)=>{
    const {success}=blogpostdata.safeParse(req.body)
    if(!success){
        res.status(411).json({
            msg:"invalid inputs..."
        })
    }
    const newblog=await Blogs.create({
        title:req.body.title,
        content:req.body.content
        
    })
    const blogId=newblog._id
    res.status(200).json({
        msg:'blog created',
        blogId:blogId,
        createdAt:newblog.createdAt
    })
})
blogRouter.get('/blog/:id',async(req,res)=>{
    const id=req.params.id;
    const resultedblog=await Blogs.findOne({
        _id:id
    })

    res.status(200).json({
        resultedblog
    })
})
blogRouter.get('/all',async(req,res)=>{
    const blogs=await Blogs.find({})
    res.json({
        msg:'all blogs',
        blogs
    })
})

blogRouter.put('/blog/:id',async(req,res)=>{
    const id=req.params.id;
    const updateddata=req.body;
    try {
        const updatedBlog=await Blogs.findOneAndUpdate(id,updateddata,{new:true})
        if (!updatedBlog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        res.status(200).json({ updatedBlog });
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports=blogRouter