const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser =require('body-parser');
const path =require ('path');
const connectDB= require('./server/database/connection');

const app = express();
const PORT= process.env.PORT||5000
dotenv.config({path :'config.env'})

app.use(morgan('tiny'));
connectDB();
app.use(bodyparser.urlencoded({extended : true}));
app.set("view engine", "ejs");

app.use('/c.css', express.static(path.resolve(__dirname, "assets/c.css")))
app.use('/picture.img', express.static(path.resolve(__dirname, "assets/picture.img")))
app.use('/j.js', express.static(path.resolve(__dirname, "assets/j.js")))
app.use('/',require('./server/routes/route'))

app.listen(PORT, ()=>
{
    console.log(`server is running on http://localhost${PORT} `)
})