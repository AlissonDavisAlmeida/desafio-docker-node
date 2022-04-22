const express = require("express")
const app = express()
const mysql = require("mysql")

app.use(express.json())

const connection = mysql.createConnection({
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
})

app.get("/", (req, res)=>{

    
    
        const sql = "INSERT INTO people(name) VALUES('Apolo');"

        connection.connect()
    
        connection.query(sql)

        const queryList = "SELECT * FROM people"
        let peoples;
        connection.query(queryList, (erro, results, fields)=>{
            
            peoples = results
            console.log(peoples)
            res.json({
                titulo: "<h1>Full Cycle Rocks!</h1>",
                peoples
            })
        })
        
    
            
    
})


app.listen(3000,()=>{
    
    console.log("Listening in port 3000")

})
