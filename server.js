const express = require('express');

const app = express();
const cors = require('cors');
const ejs = require('ejs');

const bodyParser = require('body-parser');
const routes = require('./router');

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(cors())
app.use('/',routes);


app.listen(5000,()=>{
    console.log("Up and listening to port 5000");
})