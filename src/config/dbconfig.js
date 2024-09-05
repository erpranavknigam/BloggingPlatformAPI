const mongoose = require('mongoose')
const {uri, port} = require('./config')

const dbConnect = async () => {
    try{
        mongoURI = uri
        console.log(mongoURI)
        const conn = await mongoose.connect(mongoURI)
        console.log("Database Connection is Successful")
    }catch(ex){
        console.log("DB Connection Failed",ex)
        process.exit(1)
    }
}

module.exports = dbConnect;