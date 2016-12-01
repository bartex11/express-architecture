const mongoose = require('mongoose')
const express = require('express')

let app = express()

app.get('/',(req, res) =>{
    mongoose.connect('mongodb://localhost:27017/some-express-db')
    
    console.log('MongoDb is ready')

    res.send('Coolll!!')

})

app.listen(1234)
console.log('Express is ready!')


Joooo