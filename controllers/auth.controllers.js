const { request, response } = require('express')// para tener los methodos de res...
const bcrypjs = require('bcryptjs')

const User = require('../models/user.models')
const generateJWT = require('../helpers/generateJWT')





const loginPost = async (req, res = response) => {

    const { email, password } = req.body


    try {
        const user = await User.findOne({ email })

        //Verify if email exist
        if (!user) {
            return res.status(400).json({
                msn: 'Your Email/password is not valid - Email'

            })
        }
        //Verify if user  actif
        if (!user.state) {
            return res.status(400).json({
                msn: 'Your Email/password is not valid - state: false'

            })
        }

        //Verify password
        const validatePassword = bcrypjs.compareSync(password, user.password);

        if (!validatePassword) {
            return res.status(400).json({
                msn: 'Your Email/password is not valid - Password'

            })
        }
        //Generer JWT
        const token = await generateJWT(user.id);
        
        res.status(200).json({
            msn: 'Controller AuthPost',
            token,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msn: 'Ask your manager'

        })
    }
}

module.exports = {
    loginPost

}