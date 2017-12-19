/*
var http = require('http');

//Create a server object
http.createServer(function(req, res){
//    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Hello World esto es nuevo!');
    res.end();	
}).listen(8080);
*/

var express = require('express');
var app = express();

app.use(express.static('public'))
app.use(express.static('views'))
/*
app.use(express.static('js'))
app.use(express.static('css'))
*/

app.get('/', function (req, res) {
//res.send('Hello World!'); //Puedo hacer una funcion pesada que toque la base de datos, etc
  res.send('<h1>Holaaaa</h1>');
});

//Dejando a la escucha el servidor
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


/*
LEER SOBRE NUXT
hacer cosas sobre 
Get dame algo le pido al servidor
Post Te mando estos datos hace algo
put cuando quiero hacer algo con datos de la base de datos, cuando edito una base de datos.

Con cual de estos metodos me podría lleagr un pedido
app.get: El punto de entrada de la web
app.post
app.put
etc
*/
//Leer sobre EJS

aplicacion con now 