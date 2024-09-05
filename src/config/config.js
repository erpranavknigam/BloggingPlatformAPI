require('dotenv').config()

module.exports = {
    uri: process.env.MONGO_URI,
    port: process.env.PORT || 3000
}