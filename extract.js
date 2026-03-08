const fs = require('fs');
const pdf = require('pdf-parse');

console.log(typeof pdf, Object.keys(pdf));

let dataBuffer = fs.readFileSync('HTML Page 21 Dias.pdf');

try {
    let fn = typeof pdf === 'function' ? pdf : (pdf.default || pdf.pdf);
    fn(dataBuffer).then(function (data) {
        fs.writeFileSync('extracted.txt', data.text);
        console.log('Successfully extracted PDF text to extracted.txt');
    }).catch(err => console.error(err));
} catch (e) {
    console.error(e);
}
