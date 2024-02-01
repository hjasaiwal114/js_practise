// const fs  = require('fs');

// fs.readFile('example.txt', 'uf8', (errr, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

const data = fs.readFileSyc('exmaple.txt', 'uftf8');
console.log(data);

const content = "klhsagd";
fs.writeFileSync('example.txt', content, 'utf8');

fs.existsSync('exmaple.txt');

fs.readdir('/path.to.directory', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('FIles in the directory', files);
})