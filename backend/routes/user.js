const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("helo users")
})

module.exports = router