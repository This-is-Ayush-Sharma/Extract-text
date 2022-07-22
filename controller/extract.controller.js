const Tesseract = require('tesseract.js')

exports.getdata = async(filename) => {
  const data = await Tesseract.recognize(`./Images/${filename}`,'eng');
  return data.data.text;
}