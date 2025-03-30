const express = require('express');
const router = express.Router();



router.get('/', (req,res)=>{
    const comment = req.query;
    res.send([{comment : 'comment1'},{comment: 'comment2'}])
})


module.exports = router