const express = require('express');
const app =express();
const mysql = require("mysql");

const db= mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Kuchbhi",
});



app.get('/',(req,res)=>{
    const sqlInsert = "INSERT INTO table_name (column1, column2) VALUES ('value1', 'value2');";
    
})

app.listen(3000, ()=>{
    console.log("hua hua");
})