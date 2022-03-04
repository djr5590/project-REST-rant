// Dependencies
const express = require('express')

// Configuration
const Place = require('../models/places.js')
const router = express.Router()
const db = require("../models")

// Index
router.get('/', async (req, res) => {
    try {
        const places = db.Place.find()
        res.render('places/index', { places })
    } catch (err) {
        console.log(err)
        res.render('error404')
    }
})

// Create(POST)
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message}`
                }
                console.log('Validation error message', message)
                res.render('places/new', { message })
            } else {
                res.render('error404')
            }
        })
})

// New
router.get('/new', (req, res) => {
    res.render('places/new')
})

// Show
router.get('/:id', async (req, res) => {
    try {
        const place = await db.Place.findById(req.params.id)
            .populate('comments')
        res.render('places/show', { place: place })
        console.log(place.comments)
        res.render('places/show', { place })
    } catch (err) {
        console.error('err', err)
        res.render('error404')
    }
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

// Delete
router.delete("/:id", (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then((place) => {
            res.redirect("/places");
        })
        .catch((err) => {
            console.log("err", err);
            res.render("error404");
        })
})

// Edit 
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render("places/edit", { place });
        })
        .catch((err) => {
            console.log("err", err);
            res.render("error404");
        })
})

// Comment route
router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
