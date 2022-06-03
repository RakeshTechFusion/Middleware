const {Router} = require("express");

const productsRouter= Router();

 productsRouter.get("./get",(req,res)=>{
    res.send("get");
 });