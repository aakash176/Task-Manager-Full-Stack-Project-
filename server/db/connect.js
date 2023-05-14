const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const connect = async() => {
    const connectionString = process.env.CONNECTION_STRING
    try{
        await mongoose.connect(connectionString).then(() => {console.log("CONNECTED TO DATABASE")})
    } catch(err){
        console.log('error while connecting database', err)
    }
}

mongoose.set('strictQuery', false)

module.exports = {connect}