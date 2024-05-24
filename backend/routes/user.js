const express=require("express")
const {Users}=require('../db')
const zod=require('zod')
const userRouter=express.Router()
const jwt=require('jsonwebtoken')
const JWT_SECRET=require('../config')

const signupdata = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    userName: zod.string().email(),
    password: zod.string().min(8) // Ensure a minimum password length
});

userRouter.post('/signup', async (req, res) => {
    const validation = signupdata.safeParse(req.body);

    if (!validation.success) {
        return res.status(400).json({ msg: 'Incorrect inputs' });
    }

    const { firstName, lastName, userName, password } = req.body;

    try {
        const existingUser = await Users.findOne({ userName });

        if (existingUser) {
            return res.status(409).json({ msg: 'User with this username already exists. Please try logging in or use a different username.' });
        }

        const user = await Users.create({
            firstName,
            lastName,
            userName,
            password
        });

        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);

        res.json({
            msg: 'Successfully signed up',
            token: token
        });
    } catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
    }
});


const signindata=zod.object({
    userName:zod.string().email(),
    password:zod.string().min(8)
})
userRouter.post('/signin',async(req,res)=>{
    const {success}=signindata.safeParse(req.body)
    if(!success){
        return res.status(409).json({
            msg:'invalid inputs'
        })
    }
    const user=await Users.findOne({
        userName:req.body.userName,
        password:req.body.password
    })
    const userId=user._id;
    const token=jwt.sign({userId},JWT_SECRET)

    res.json({
        msg:'user signed in ',
        token:token
    })
    return res.json({
        msg:'user not found with these credentials'
    })
})

module.exports=userRouter