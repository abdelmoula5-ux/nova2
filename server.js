const express=require("express");
const bodyParser=require("body-parser");
const fs=require("fs");
const app=express();
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.get("/messages.json",(req,res)=>{fs.readFile("messages.json","utf8",(err,data)=>{if(err)res.json([]);else res.send(data)})});
app.post("/messages.json",(req,res)=>{fs.writeFile("messages.json",JSON.stringify(req.body,null,2),(err)=>{if(err)res.status(500).send("Error");else res.send("OK")})});
app.listen(process.env.PORT||3000,()=>console.log("Server running"))