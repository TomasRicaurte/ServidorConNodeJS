
const http = require('http');
const chalk = require('chalk');


const host = 'localhost';
const puerto = 8000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    const miInfo = {
        nombre: "Tomas Ricaurte",
        mensaje: "Hola desde el servidor de prueba",
    };
    res.end(JSON.stringify(miInfo));
});

server.listen(puerto, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${puerto}`));
});
