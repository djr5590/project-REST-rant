// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express Settings
app.use('/places', require('./controllers/places'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req,res) => {
    console.log('testing')
    res.render('Home')
})

app.get('*', (req, res) => {
    res.render('error404')
    //  res.status(404).send('<h1>404 Page</h1>')
})

// Listen for Connections
app.listen(process.env.PORT) 