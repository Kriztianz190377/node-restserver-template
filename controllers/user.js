const { response } = require('express');

const userGet = (req, res = response) => {

    const query = req.query

    res.json({

        msg: 'application  get API- Controllers',
        query
    })
}
const userPost = (req, res = response) => {

    const { name, edad } = req.body;
    res.json({
        msg: 'application  post API- Controllers',
        name,
        edad
    })
}
const userPut = (req, res = response) => {

    const { id } = req.params
    res.json({
        msg: 'application  Put API- Controllers',
        id
    })
}
const userPatch = (req, res = response) => {
    res.json({

        msg: 'application  Patch API- Controllers'
    })
}
const userDelete = (req, res = response) => {
    res.json({

        msg: 'application  Delete API- Controllers'
    })
}





module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete

}