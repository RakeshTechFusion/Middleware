const express = require("express");
const groceryRouter = require("./routes/groceries.route")
const app= express();
  
app.use(express.urlencoded({extended: ture}));
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    method:["GET"],
    allowedheaders:["content-type"]
})
);
// logger middleware
app.use((req,res,next)=>{
    console.log("Route",req.url,"Method:",req.method,"At:",new Date());
});
// Auth middleware
app.use("/groceries",(req,res,next)=>{
    if(!req.headers["apiKey"]){
        return res.status(401).send("user not authendicated");
    }
    next();
});
// create a middle that calculate time taken by req

app.use((req,res,next)=>{
    const t1 = performance.now();// current time..
    next();
    const t2 = performance.now();
    console.log("Time taken",t2 - t1);
})
app.use("/groceries",groceryRouter);

// app.use("/products",pouductRouter);
function loggingMiddleware(req,res){
    console.log("Routes Accesed",req.url,"Method:",req.method,"At:",new Date());
    if(true){
        return res.send("");
    }
}

app.get("/",(res,req)=>{
    res.send("hello");
});

app.get("/groceries",(res,req)=>{
    res.send("hello");
});

app.put("/cart",(res,req)=>{
    res.send("hello");
});
app.delete("/user",(res,req)=>{
    res.send("hello");
});

app.listen(8080);