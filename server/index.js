const express = require('express')
const app = express()
const {connect} = require('./db/connect')
const port = 5000
const tasks = require('./routes/routes')
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())
app.use('/', tasks)
const start = async () => {
    try{
        await connect()
        app.listen(port, () => console.log(`app is listening to port ${port}`))
    } catch(err){
        console.log(err)
    }
}

start()

