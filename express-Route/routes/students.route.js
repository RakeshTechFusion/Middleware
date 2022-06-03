const {Router} = require("express");

const students = Router();

students.post("/create",(req,res)=>{
    res.send("create");
});

st.put("/update",(req,res)=>{
    res.send("update");
});

st.get("/get",(req,res)=>{
    res.send(" students get");
});
st.delete("/delete",(req,res)=>{
    res.send("delete");
});

module.exports = students;