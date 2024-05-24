const express=require("express")
const userRouter = require("./routes/user")
const blogRouter = require("./routes/blog")
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())

app.use('/api/v1/user',userRouter)
app.use('/api/v1/blogs',blogRouter)
const port=3000;
app.listen(port,()=>{
    console.log(`app is listening to port ${port}`)
})