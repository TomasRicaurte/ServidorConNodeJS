
const http = require('http');
const chalk = require('chalk');


const host = 'localhost';
const puerto = 8000;

const servidor = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const respuesta = JSON.stringify({ nombre: 'Tomas Ricaurte', mensaje: 'Hola desde el servidor de prueba' });
  res.end(respuesta);
});

servidor.listen(puerto, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${puerto}`));
});
