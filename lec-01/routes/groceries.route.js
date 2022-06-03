

const {Router} = require("express");

const groceryRouter= Router();

groceryRouter.get("/",(req,res)=>{
    res.send("grocery 1,2,3,4")
});

module.exports=groceryRouter;