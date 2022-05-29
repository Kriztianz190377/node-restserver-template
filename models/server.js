const express = require('express');
var cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        //Middlewares

        this.middlewares();

        //Routd of my application
        this.routes();

    }
    middlewares() {
        //cors
        this.app.use(cors());
        
        //reading and parseo of body
        this.app.use(express.json( ));

        //public directory
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en', this.port);
        })
    }

}
module.exports = Server;