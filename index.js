const express = require("express"); // utilizo la libreia y guardo en una variable
const mysql = require("mysql"); // utilizo una libreria y la guardo en una constante
const app = express(); // instancia de nuestra aplicacion 


/*middleware = punto intermedio entre el cliente y el servidor
me permite configurar las solicitudes del cliente de un tipo de documento a otro
indica
- jason 
- motor plantillas
- ejs
- carpetas estaticas, publicas
- patro de diseño MVC (modelo vista controlador)
*/
//motor de plantillas ejs
app.set("view engine","ejs");

// trabajar desde a aplicacion una carpeta publica
app.use(express.static("public")); // fin middleware

//asignacion de la ruta principal
app.get("/contacto",(req,res) =>{
    res.render('contacto',{"titulo":"contacto"})
});

app.get("/",(req,res) =>{
    res.render('index',{"titulo":"principal"})
});



app.get("/instrumentos",(req,res) =>{
    let instrumentos = [
        {
            "Nombre":"Guitarra",
            "Precio":30,
            "Proveedor":"Casa musica",
            "powers":["powers 1","powers 2","powers3"],
            "Descuento":"5",
        },
        {
            "Nombre":"Piano",
            "Precio":10,
            "Proveedor":"Casa musical",
            "powers":["powers 1","powers 2","powers3"],
            "Descuento":"15",
        },
        {
            "Nombre":"Bateria",
            "Precio":20,
            "Proveedor":"Dlc",
            "powers":["powers 1","powers 2","powers3"],
            "Descuento":"1",
        }
    ];
    res.render('instrumentos',{"instrumentos": instrumentos})
});

app.get("/teoria",(req,res) =>{
    res.render('teoria',{"titulo":"teoria"})
});

//ejecucion del servidor
app.listen(3000, ()=>{
    console.log("Servidor corriendo en http://localhost:3000");
});


//BAD PRACTICE
var conectar = mysql.createConnection({ //metodo y formato JASON
    host : "localhost",
    user : "root",
    password : "",
    database : "facturacion"
})

conectar.connect((error)=>{
    if(error){
        console.log('Error de conexion',error)
        return
    }
    else{
        console.log('Conectado a la base de datos')
    }
})