require("dotenv").config()
const { MONGODB_URL } = process.env
const mongoose = require("mongoose")

mongoose.connect(MONGODB_URL)

mongoose.connection
    .on('open', () =>  console.log("you are connected"))
    .on('close', () => console.log("you are disconneted"))
    .on('error', (error) => console.log(error))

    mongoose.exports = mongoose