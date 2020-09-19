// Importar de maneira geral outro arquivo

const data = require ('./pessoas');
// console.log(data);
// console.log(data.idades);
// console.log(data.idades, data.pessoas);


// imporyar um arquivo que possui module.exports

const os = require('os');
// console.log(os);
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.hostname());

// https://nodejs.org/api/os.html


//const {pessoas} = require ('./pessoas');
// console.log(pessoas);

const {idades} = require ('./pessoas');
console.log(idades);



