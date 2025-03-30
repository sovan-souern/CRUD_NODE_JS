const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => console.log("server is running on port", port));


app.get('/', (req,res)=>{
    res.send({message: 'Hello world'})
})



const userRouter = require('./routes/user'); 
app.use('/users',userRouter)


const postRouter = require('.routes/post');
app.use('/posts', postRouter);