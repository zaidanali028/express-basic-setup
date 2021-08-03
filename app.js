const express = require("express");
const ejs = require("ejs");
const path= require("path");

const app = express();
const _PORT= process.env.PORT || 5050;

//static files
app.use(express.static(path.join(__dirname, "public")));
//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));


const homeRoutes = require("./routes/home/index");
app.use("/", homeRoutes);



app.listen(_PORT,()=>{
    console.log(`App running on port ${_PORT}`)
})