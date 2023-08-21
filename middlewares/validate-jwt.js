const { request, response } = require("express")
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");



const valiadteJWT = async (req = request, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msn: 'There is not Token in request'
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETEORPRIVATEKEY)
        //reading UserModel
        const user = await User.findById(uid)
        if (!user) {
            return res.status(401).json({
                msn: 'Invalid Token-- User does not exist in DB'
            })
        }

        //reading state User
        if (!user.state) {
            return res.status(401).json({
                msn: 'Invalid Token--User with state: False'
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msn: 'Invalid Token'
        })
    }



}

module.exports = {
    valiadteJWT
}
