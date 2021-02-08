const { request, response } = require("express");
const express=require("express")
const app=express();

app.get('/',(request,response)=>
    {
        console.log("heyy");
        response.send("Hello");
    }
)
app.listen(process.env.PORT||4000,()=>
{
    console.log("server is on port 4000")
})