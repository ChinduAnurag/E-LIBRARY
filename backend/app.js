const express = require('express')
const cors = require('cors')
const logger = require('morgan') // for seeing api calls in terminal
const PORT = 8524
const app = new express()

 require('./middleware/mongodb')

app.use(cors()) //to connect frontend and backend 
app.use(express.json()) // to recieve data from front end
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
const bookData=require('./models/book');
const userData=require('./models/user')
const jwt=require('jsonwebtoken');

//api
 const userapi=require('./router/userapi')
app.use('/api',userapi)

const bookapi=require('./router/bookapi')
app.use('/api',bookapi);

// Server code 
app.listen(PORT, () => {
    console.log(`...........Server running at ${PORT}.............`)
})