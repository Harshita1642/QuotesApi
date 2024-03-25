const express=require("express");
const app=express();
const PORT=process.env.PORT ||  5000;

const quotes_routes=require("./routes/quotes");
app.get("/",(req,res)=>{
    res.send("Hi, I am live");
})

app.use("/api/quotes",quotes_routes);
const start= async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`${PORT} YES I am Connected`);
        })
    }
    catch(error){
        console.log(error);
    }
}
start();