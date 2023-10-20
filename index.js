const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const mongoose = require("mongoose")
require("dotenv").config()
const Users = require("./models/user")
const Post = require("./models/publication")

const morgan = require('morgan')
const routes = require('./routes/index');
//midle
app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/', routes);
mongoose.connect(process.env.URL).then(()=>console.log("db conectada")).catch(e=>console.log("fallo"+e))
app.listen(PORT,()=>console.log("server raised on ",PORT))