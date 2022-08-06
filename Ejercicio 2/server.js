
/****	Declaraciones 	***/
const   express = require('express'),
        morgan = require('morgan'),
        app = express(),
        port = parseInt(process.env.PORT, 10) || 3000,
        bodyParser = require('body-parser'),
        { mongoose } = require('./database');

/****	Declaraciones 	***/

/****	Configuraciones 	***/
app.set('port', port);

//Para usar archivos locales
app.use("/src", express.static('./src/'));
app.get('/', function (req, res){
    res.sendFile(__dirname+"/src/index.html");
});

/****	Configuraciones 	***/

/**** Cors  ***/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});


/****	Middlewares 	***/
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/****	Middlewares 	***/


/****	Importar Rutas 	***/
let studentRoutes = require('./backend/routes/students');
let classRoomRoutes = require('./backend/routes/classrooms');
/****	Importar Rutas 	***/


/****	Rutas 	***/

app.use('/api', studentRoutes);
app.use('/api', classRoomRoutes);

/****	Rutas 	***/



/***  Puerto de Escucha ***/
app.listen(port, () => {
    console.log('Backend corriendo en el puerto : ' + port + ', state: \x1b[32m%s\x1b[0m', 'online');
});