const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    } 
    try{
        const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json("account has been updated")
    }catch(err){
        return res.status(403).json("You can only update your account");

    }
  } else {
    return res.status(403).json("You can only update your account");
  }
});
//DELETE USER
//GET A USER
//FOLLOW A USER
//UNFOLLOW A USER

module.exports = router;
