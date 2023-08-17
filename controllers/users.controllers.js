const { request, response } = require('express')// para tener los methodos de res...
var bcrypt = require('bcryptjs');
const { emailExist } = require('../helpers/db-validators');

const User = require('../models/user.models');



const usersGet = async (req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query

    { // const users = await User.find({ state: true })
        //     .skip(Number(from))//do validation of Number
        //     .limit(Number(limit))
        // const allUsers = await User.countDocuments({ state: true })
    }

    const [allUsers, users] = await Promise.all([
        User.countDocuments({ state: true }),
        await User.find({ state: true })
            .skip(Number(from))//do validation of Number
            .limit(Number(limit))
    ])
    res.status(200).json({
        allUsers,
        users,
    })

}
const usersPost = async (req, res = response) => {

    const { name, email, password, rol } = req.body
    const user = new User({ name, email, password, rol })

    // encrypt password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    //save en DB
    await user.save();

    res.status(200).json({
        user,
        msn: "post API-controllers"
    })
}
const usersPut = async (req, res) => {
    const id = req.params.id;


    const { _id, password, google, email, ...rest } = req.body

    //TODO validate in DB 
    if (password) {
        // encrypt password
        const salt = bcrypt.genSaltSync();
        rest.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate(id, rest)

    res.status(200).json({
        user,
        msn: "put API",
    })
}
const usersPatch = (req, res) => {
    res.status(200).json({
        msn: "patch API"
    })
}
const usersDelete = async (req, res) => {
    const { id } = req.params

    //delete of dbMongoose
    //const user = await User.findByIdAndDelete(id)
    
    const user = await User.findByIdAndUpdate(id, {state:false})

    res.status(200).json({
        user,
        msn: "delete API"
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete,

}