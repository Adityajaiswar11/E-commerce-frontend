const express = require("express");

const app = express();

app.use((req,res,next) => {
    next();
})

const port = 3000;

app.get("/",(req,res) => {
     res.send("<h1>This is hello world </h1>")
})


app.get("/youtube",(req,res) => {
    res.send("<h1>Welcome to youtube </h1>")
})


app.listen(port , ()=>{
     console.log(`server is running on ${port}`)
})