// The Main response file where controller is called and executed.

// Require Framework, libraries, and modules
const express = require("express")
const bp = require("body-parser")
require('express-async-errors')
const emp_Routes = require('./controller')
const conn = require('./db')

//  Create app
const app = express()
// Use the routes from controller file (the middleware)
app.use('/api/employees',emp_Routes)

// Required for JSON format and perform operations 
app.use(bp.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname))

// Global Error Handler
app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500).send('something went wrong')
})

// Called the home page from index.html file
app.get("/", (req,res)=>{
    res.sendFile("./index.html")
})

// Inserting the data within the table employees
app.post("/submitted", (req,res)=>{
    let {emp_name, job_title, contact_main, email, address, city, state, emg_contact1, contact1, relation1, emg_contact2, contact2, relation2} = req.body;

    conn.query("insert into `employees` (emp_name,job_title,contact_main,email,address,city,state,emg_contact1,contact1,relation1,emg_contact2,contact2,relation2)  values (?,?,?,?,?,?,?,?,?,?,?,?,?)",[emp_name,job_title,contact_main,email,address,city,state,emg_contact1,contact1,relation1,emg_contact2,contact2,relation2])
    .catch(err => console.log(err));
    res.send("<h1>Submitted successfully</h1> <a href='/'>Insert Another Employee</a> ")
})

// Setting the localhost server
app.listen(2000,()=>{
    console.log("Got it")
})

