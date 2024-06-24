const express = require("express");
const indexRouter = express.Router();

// just for testing //
indexRouter.get('/',(req,res)=>{
    res.status(200).json({message:'common service TD'})
})

// start adding more api //


module.exports = indexRouter