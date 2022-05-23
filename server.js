const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(3001,()=>{console.log("express running")});

app.get("/", async (req,res)=>{
    let temp = Math.floor(Math.random() * 50) + 5;
    res.json(`${temp}C`);
});
