const express = require("express")
const router = express.Router()

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

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router