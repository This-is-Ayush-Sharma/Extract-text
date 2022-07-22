const multer = require('multer');
const path = require('path');
var name;
const assign = (file)=>{
    name = Date.now() + path.extname(file.originalname);
    return name;
}
const Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "././Images");
    },
    filename: function(req, file, callback) {
        callback(null,assign(file));
    }
});
const getName = ()=>{
    return name;
}
const upload = multer({
    storage: Storage,
})
const obj = {
    upload,
    getName
};

module.exports = obj;