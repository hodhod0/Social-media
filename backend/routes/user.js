const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("helo welcome users")
})

module.exports = router