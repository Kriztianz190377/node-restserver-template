
const jwt = require('jsonwebtoken');


const generateJWT = (uid = '') => {


    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETEORPRIVATEKEY, {
            expiresIn: '365d'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Failed to generate token')
            }else{
                resolve(token)
            }


        })


    })
    // const token=jwt
    // console.log(token)

}
module.exports = generateJWT;