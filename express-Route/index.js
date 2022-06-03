const express = require("express");

const teacherRoutes = require("./routes/teachers.route");

const studentRoutes = require("./routes/students.route");
const app = express();

app.use("/teachers", teachersRoutes);
app.use("/students",studentsRoutes);
app.listen(8080,()=>{
    console.log("Server Started");
});