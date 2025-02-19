

const middleware = (req, res, next) => {

    console.log("MiddleWare HITTTTTTTTT")

    next()


}

module.exports = middleware