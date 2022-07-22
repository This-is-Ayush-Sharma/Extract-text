const fs = require('fs');


exports.deleteFile = (filenm) => {
    const path = `./Images/${filenm}`
    try {
        fs.unlinkSync(path);
        //file removed
    } catch (err) {
        console.error(err);
    }
}