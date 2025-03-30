const express = require('express');
const router = express.Router();



router.get('/', (req,res)=>{
    const post = req.query;
    res.send([{post : 'post1'},{post: 'post2'}])
})


module.exports = router