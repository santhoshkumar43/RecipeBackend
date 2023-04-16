const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const e = require('express')
const routes = require('./routes/Router')
require('dotenv').config()

const app = express()
const PORT = process.env.port | 5000
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to MongoDb .......'))
.catch((err)=> console.log(err))

app.use(routes)
app.listen(PORT,()=> console.log(`Listining on: ${PORT}`))
