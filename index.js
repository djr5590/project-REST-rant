// Dependencies
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

// Configuration
const app = express()
const PORT = process.env.PORT || 5000

// View Engine
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Places Route
const placesRoutes = require('./controllers/places')
app.use('/places', placesRoutes)



app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db connected')).catch(err => console.log(err))

// step 4 part 10 
// module.exports.Place = require('../places')
// module.exports.Comment = require('../comment')

// Listen
app.listen(PORT, () => console.log(`listening on port ${PORT}`))