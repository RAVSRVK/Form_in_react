const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
app.use(cors())
app.use(express.json())

const db =  mysql.createConnection({
    user: 'practice',
    host: 'localhost',
    password: 'TresRich-MF@0',
    database:'Sama_db'
});
app.post('/create', async (req,res) =>{
    const {states, issue} = req.body
    // console.log(name);
    // const query1 = 'show databases'
    const query = `insert into issues (states,issue) values('${states}','${issue}' )`
    // console.log(query);'INSERT INTO issues (Name,states,issue) VALUES (?,?,?)', 
    // [name,states,issue],
    db.query(query, (err, result) =>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Inserted successfully")
        }
    })
})

app.listen(3307, () =>{
    console.log("Connected111");
})


