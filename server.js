const express = require('express');

const app = express();
const cors = require('cors');
const ejs = require('ejs');

const bodyParser = require('body-parser');
const routes = require('./router');
const port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(cors())
app.use('/',routes);


app.listen(port,()=>{
    console.log("Up and listening to port ${port}");
})