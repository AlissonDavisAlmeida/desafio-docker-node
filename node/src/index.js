const express = require("express")
const app = express()
const mysql = require("mysql")


app.get("/", (req, res)=>{
    res.send("<h1>Full Cycle Rocks!</h1>")
})


app.listen(3000,()=>{
    
    const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
})

const sql = "INSERT INTO people(name) VALUES('Apolo');"

connection.connect()

connection.query(sql)

connection.end()
    console.log("Listening in port 3000")
})
