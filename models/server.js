const express = require('express')
const { dbConnection } = require('../database/config');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'
        this.authPath = '/api/auth'

        //connection a DB
        this.conecctionDB()

        //middlewares
        this.middleware();


        //routes my app
        this.routes();

    }
    async conecctionDB() {
       await dbConnection();
    }

    middleware() {
        //CORS
        this.app.use(cors())

        //Lectura y parseo del body

        this.app.use(express.json())

        //directpry public
        this.app.use(express.static('public'))
    }

    routes() {

        this.app.use(this.usersPath, require('../routes/users.routes'))
        this.app.use(this.authPath, require('../routes/auth.routes'))

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('listening in port: ', this.port)
        })


    }
}

module.exports = Server