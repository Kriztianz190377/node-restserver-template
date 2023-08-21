const { response, request } = require("express")


const isAdminRol = (req = request, res = response, next) => {

    if (!req.user) {
        return res.status(500).json({
            msn: 'You want to validate the role of the user without validating the token first'
        })
    }
    const { rol, name } = req.user

    if (rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msn: 'You are not an administrator -- You cannot make these changes'
        })
    }

    next();
}

const hasRol = (...rols) => {

    return (req, res = response, next) => {
        console.log(rols, req.user.rol)
        if (!req.user) {
            return res.status(500).json({
                msn: 'You want to validate the role of the user without validating the token first'
            })
        }
        if (!rols.includes(req.user.rol)) {
            return res.status(401).json({
                msn: `the service requires one of these roles: ${rols}`
            })
        }


        next();
    }

}

module.exports = {
    isAdminRol,
    hasRol
}