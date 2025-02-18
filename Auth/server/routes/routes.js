const Controller = require("../controller/controller")

module.exports = (app) => {

app.post("/register", Controller.register)

app.post("/login", Controller.login)


}