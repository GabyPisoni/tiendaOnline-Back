var express = require("express");
const router = express.Router()
var movis = require("../modals/dates");
router.get("/",(req,res)=>{
    res.send(movis)
})
module.exports = router;