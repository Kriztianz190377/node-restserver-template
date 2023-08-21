


const validateFields = require('../middlewares/validateFields');
const valiadteJWT = require('../middlewares/validate-jwt');
const validateRols = require('../middlewares/Validate-rols');




module.exports = {
    ...validateFields,
    ...valiadteJWT,
    ...validateRols
}