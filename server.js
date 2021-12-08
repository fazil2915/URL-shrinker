const express=require("express");
const bodyparser =require("body-parser");
const path=require("path")
const mongoose=require("mongoose");
const app=express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));

//mongoose connect
mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser:true, useUnifiedTopology:true
})
const PORT=3000;
app.get('/',(req,res)=>{
    res.render("index")
})
app.post("/shortUrl",(req,res)=>{
    
})
// app.use('/',require("./server/routes/router"))

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}Port`);
})