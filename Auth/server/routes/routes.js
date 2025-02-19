const Controller = require("../controller/controller")
const MiddleWare = require("../middleware/middleware")


module.exports = (app) => {

    app.post("/register", Controller.register)

    app.post("/login", MiddleWare, Controller.login)

    // route to check auth from the Protected Route in React
    app.get("/authCheck", Controller.authCheck)


}