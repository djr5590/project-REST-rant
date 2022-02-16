// const express = require("express")
// const router = express.Router()

const router = require('express').Router()
const places = require('../models/places.js')

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('places')
})

router.get('/', (req, res) => {
    res.render('places/index', { places })
})


//GET NEW PLACES
router.get('/new', (req, res) => {
    res.render('places/new')
})


// GET PLACES
router.get("/", (req, res) => {
    let places = [
        {
            name: "H-Thai-ML",
            city: "Seattle",
            state: "WA",
            cuisines: "Thai, Pan-Asian",
            pic: '/images/red-curry-chicken.jpg',
            // Photo by <a href="https://unsplash.com/@grisskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max Griss</a> on <a href="https://unsplash.com/s/photos/thai-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        },
        {
            name: "Coding Cat Cafe",
            city: "Phoenix",
            state: "AZ",
            cuisines: "Coffee, Bakery",
            pic: '/images/coding-cat-cafe.jpg',
            // Photo by <a href="https://unsplash.com/@herlifeinpixels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hannah Wei</a> on <a href="https://unsplash.com/s/photos/cat-cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            
        },
    ]
    res.render("places/index", { places })
})


module.exports = router