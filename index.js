const express = require("express");
const server = express();

const empleado={
    "Primer Nombre": "juan",
    "Segundo Nombre": "Carlos"
};

server.get('/', function(request, response){
    response.send("Servicio get raiz");
});

server.get('/empleado', function(request, response){
    response.send(empleado);
});

server.listen(
    4000,()=>{
        console.log("HOLA MUNDO,");
    }
);