require('dotenv').config()
const express = require('express')
const placesRoutes = require('./controllers/places')

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/places', placesRoutes)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))