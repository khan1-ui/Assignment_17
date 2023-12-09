//Basic library project import
const express = require('express')
const app = new express()
const router = require('./src/routes/api')
const bodyParser = require('body-parser')

//Security Middleware library import
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')

const hpp = require('hpp')
const cors = require('cors')
//Database Library Import
const mongoose = require('mongoose')
 
//Security Middlware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())

app.use(hpp())
//BodyParser Implement
app.use(bodyParser.json())
// Request Rate Limit
const limiter = rateLimit({
    windowMS:15*60*1000,max:3000
})
app.use(limiter)
//Mongodb Database connect
let URI = "mongodb://localhost:27017/School"
let OPTION = ""
try {

    mongoose.connect(URI,OPTION)
    console.log("Connection Success")   
} catch (error) {
    console.log(error)
}
//Routing Implement
app.use("/api/v1",router)
//Undefined URI/Path
app.use("*",(req,res)=>{
    res.status(200).json({status:"Failed",data:"404 Not found"})
})
module.exports = app