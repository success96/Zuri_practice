const fs = require('fs');

//NB: Note that this module takes the full file path as its arguement, unless you are in the same 
// drectory as the file you want read, write or append to!

// //write to a file
// fs.writeFile('file.json', JSON.stringify(['Welcome to this json file']), (err) => {
//     if(err) throw err
// });

// //read from a file
// fs.readFile('file.json', 'utf8', (err, content)=>{
//     if (err) throw err
//     console.log(content)
// })

//utf8 is an encoding format that works well for strings

// //append to a file
// fs.appendFile('file.json', JSON.stringify(["Life is good"]), (err) => {
//     if (err) throw err
// })

//to append to the already added array in the json file

fs.readFile('file.json', 'utf8', (err, content) => {
    if (err) throw err

    let data = JSON.parse(content)

    data.push('Life is good all the time')

    fs.writeFile('file.json', JSON.stringify(data), (err) => {
        if (err) throw err
    })
})