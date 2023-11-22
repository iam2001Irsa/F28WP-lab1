const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

//basically follows the path mentioned and reads the file
dotenv.config({path:'./.env'}); //./ means that its in root directory

const app = express();
const port = 5000;

//initializes a MySQL database connection using mysql
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

//connects to the MySQL database (if connection failed, do this else do that)
db.connect((error) => {
    if(error){
        console.log(error);
    }else{
        console.log('mysql connected...')
    }
})

//executes when main page is accessed
app.get("/", (req, res) =>{
    res.send("<h1>HOME PAGE</h1>")
});

//starts the server
app.listen(port, () =>{
    console.log(`server started on port ${port}`);
});
