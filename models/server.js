const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT||3000;
        this.usersPath = '/api/users'

        //middlewares
        this.middleware();


        //routes my app
        this.routes();

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

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('listening in port: ', this.port)
        })


    }
}

module.exports = Server

