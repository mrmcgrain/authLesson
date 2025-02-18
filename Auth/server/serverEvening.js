const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const Router = require("./routes/routes")


require('dotenv').config()

app.use(cors(
    { origin: 'http://localhost:5173' }
))

app.use(express.json())

Router(app)

const PORT = 3000

app.listen(PORT, () => {

    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connected to Database")
    })
    console.log(`Server is running on port: ${PORT}`);
});
