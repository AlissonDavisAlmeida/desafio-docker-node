const express = require("express")
const app = express()



app.get("/", (req, res)=>{
    res.send("<h1>Olá Mundo Novo...Estou usando docker compose</h1>")
})


app.listen(3000,()=>{
    console.log("Listening in port 3000")
})