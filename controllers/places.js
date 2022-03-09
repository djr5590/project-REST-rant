// Dependencies
const express = require('express')

// Configuration
const places = require('../models/places.js')
const router = express.Router()
const db = require("../models")

// Index
router.get("/", (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render("places/index", { places })
        })
        .catch((err) => {
            console.log(err)
            res.render("error404")
        })
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

// Add/New
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

// Update
router.put("/:id", (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(() => {
            res.redirect(`/places/${req.params.id}`);
        })
        .catch((err) => {
            console.log("err", err);
            res.render("error404");
        })
})

// Delete
router.delete("/:id", (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then((place) => {
            res.redirect("/places")
        })
        .catch((err) => {
            console.log("err", err)
            res.render("error404")
        })
})

// Edit 
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.render("places/edit", { place })
        })
        .catch((err) => {
            console.log("err", err)
            res.render("error404")
        })
})

// Comment route
router.post("/:id", (req, res) => {
    req.body.rant = req.body.rant ? true : false;
    db.Place.findById(req.params.id)
        .then((place) => {
            db.Comment.create(req.body)
                .then((comment) => {
                    place.comments.push(comment.id);
                    place.save().then(() => {
                        res.redirect(`/places/${req.params.id}`)
                    })
                })
                .catch((err) => {
                    res.render("error404")
                })
        })
        .catch((err) => {
            res.render("error404")
        })
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
