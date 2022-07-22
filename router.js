const express = require("express");
const app = express();

const obj = require('./controller/Uploadimg.controller');
const Extract = require('./controller/extract.controller');
const deleteFile = require('./controller/deleteFile.controller');

app.get('/',(req,res)=>{
    res.render('mainPage')
})

app.post('/uploadImg',obj.upload.single('image'),async (req,res)=>{
    const name = obj.getName()
    const data= await Extract.getdata(name)
    deleteFile.deleteFile((name))
    res.render('ShowEditor',{
        data
    })
})
app.get('/upload',(req,res)=>{
    res.render('ShowEditor')

})
module.exports = app;
