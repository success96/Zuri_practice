const path = require('path');

//to obtain the path of the current folder
let directory = path.join(__dirname);

//to obtain the pathName of the current file
let filePath = path.join(__dirname, 'path_demo.js');

console.log('Directory', directory);

console.log('filePath', filePath);