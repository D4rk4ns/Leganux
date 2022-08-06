const   mongoose = require('mongoose'),
        URI = require('./config/config').URI;

        mongoose.connection.openUri(URI , (err, res) => {

            if (err) throw err;

            console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

        });
        
module.exports = mongoose;