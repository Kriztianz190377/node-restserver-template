const { request, response } = require('express')// para tener los methodos de res...

const usersGet = (req=request, res = response) => {
    const query=req.query
    res.status(200).json({
        query,
        msn: "get API"
    })

}
const usersPost = (req, res = response) => {
    const body = req.body;
    const { name, edad }=body
    
    res.status(200).json({
        body,
        msn: "post API"
    })
}
const usersPut = (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        id,
        msn: "put API"
    })
}
const usersPatch = (req, res) => {
    res.status(200).json({

        msn: "patch API"
    })
}
const usersDelete = (req, res) => {
    res.status(200).json({

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