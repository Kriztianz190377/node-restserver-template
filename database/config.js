// getting-started.js
const mongoose = require('mongoose');

// main().catch(err => console.log(err));

const dbConnection = async () => {
  URL = process.env.MONGODB_CNN
  try {

    await mongoose.connect(URL);
    console.log('conectado a la base de datos')


  } catch (error) {
    console.log(error)
    throw new Error('error when starting database')
  }

}

module.exports = {
  dbConnection
}