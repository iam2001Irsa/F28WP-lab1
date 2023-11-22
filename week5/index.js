const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');

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
        console.log('mysql connected...');
    }
});


const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
//using handlebars as view engine for rendering templates
app.set('view engine', 'hbs');

//executes when main page is accessed
app.get("/", (req, res) =>{
    res.render("index");
});

//executes when register page is accessed
app.get("/register", (req, res) =>{
    res.render("register");
});

//starts the server
app.listen(port, () =>{
    console.log(`server started on port ${port}`);
});
