const { Router } = require('express');
const { check } = require('express-validator');
const { isRolValidator, emailExist, existUserById } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validateFields');
const {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
} = require('../controllers/users.controllers');

const router = Router();

router.get('/', usersGet)


router.put('/:id', [
    check('id', 'Not a valid ID').isMongoId(),
    check('id').custom(existUserById),
    check('rol').custom(isRolValidator),
    validateFields
], usersPut)

router.post('/', [
    check('name', 'The name is required').notEmpty(),
    check('password', 'Must be 6 letters').isLength({ min: 6 }).notEmpty(),

    check('email').custom(emailExist),

    check('rol').custom(isRolValidator),
    //check('rol','Not a valid role').isIn(['ADMIN_ROLE', 'USER_ROL']).notEmpty(),
    validateFields,
], usersPost)

router.patch('/', usersPatch)
router.delete('/:id', [
    check('id', 'Not a valid ID').isMongoId(),
    check('id').custom(existUserById),
    validateFields

],usersDelete)


module.exports = router