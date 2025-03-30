const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    const user = req.query
    res.send(
        [
            {
                username :'sovan souern',
                age : 19,
                email : "sovan@gmail.com"
            },
            {
                username: 'samoun soun',
                 age : 19,
                email : "samoun@gmail.com"
            }
        ]
    )  
})



router.get('/:username/:age/:email', (req, res) => {
    const { username, age, email } = req.params;
    res.send({ username, age, email });
});



module.exports = router