const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Kuchbhi",
});

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO table_name (column1, column2) VALUES ('value1', 'value2');";
    res.status(200).send({ name: "VIVEK" })

})
app.post("/insert/:data", (req, res) => {
    // console.log(req.params.name);
    // const data=req.body.firstname;
    // const data=req.body.lastname;
    // const data=req.body.enrollmentno;
    // const data=req.body.department;
    // const data=req.body.college;
    // res.status(200).send(req.body)
    // console.log(req.body);
    res.send(req.body)
})
app.listen(8080, () => {
    // console.log("hua hua");
})