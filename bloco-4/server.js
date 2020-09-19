const http = require('http');
// console.log(http)

const server = http.createServer((req,res) => {
    //console.log('Servidor Criado')
    //console.log(req)
    res.write('<h1> OLá mundo, chegueiiiii <h1>')
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor rodando na porta 3000')
});
