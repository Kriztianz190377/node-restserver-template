const Role = require('../models/role');
const User = require('../models/user.models');

const isRolValidator = async (rol = '') => {

    const existRol = await Role.findOne({ rol });
    if (!existRol) {
        throw new Error(`the role ${rol} is not registered in the DB`)
    }
}

const emailExist = async (email = '') => {

    const emailExists = await User.findOne({ email: email });

    if (emailExists) {
        throw new Error(`The mail: ${email} already exists `)

    }
}
const existUserById = async (id = '') => {

    const existUserById = await User.findById(id);

    if (!existUserById) {
        throw new Error(`The User Id: ${id} not exists `)

    }
}

module.exports = {
    isRolValidator,
    emailExist,
    existUserById
}