const express = require('express')
const router = express.Router()
const Place = require('../models/places.js')

// Index
router.get('/', (req, res) => {
    Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// Create
router.post('/', async (req, res) => {
    try {
        if (!req.body.image) {
            req.body.image = 'http://placekitten.com/400x400'
        }
        await Place.create(req.body)
        res.redirect('/places')
    }
    catch (error) {
        res.send(error);
    }
})

// New
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    Place.findByIdAndDelete(req.params.id)
        .then(deleteBread => {
            res.status(303).redirect('/breads')
        })
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router

// const router = require('express').Router()
// const places = require('../models/places.js')

// router.post('/', (req, res) => {
//     console.log(req.body)
//     if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('places')
// })

// // GET PLACES
// router.get("/", (req, res) => {
//     res.render("places/index", { places })
// })

// //GET NEW PLACES
// router.get('/new', (req, res) => {
//     res.render('places/new')
// })

// router.get("/:id/edit", (req, res) => {
//     let id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.render("error404");
//     } else if (!places[id]) {
//         res.render("error404");
//     } else {
//         res.render("places/edit", { place: places[id] });
//     }
// });

// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id})
//     }
// })

// router.put("/:id", (req, res) => {
//     let id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.render("error404");
//     } else if (!places[id]) {
//         res.render("error404");
//     } else {
//         if (!req.body.pic) {
//             req.body.pic = "http://placeskitten.com/400/400";
//         }
//         if (!req.body.city) {
//             req.body.city = "Anytown";
//         }
//         if (!req.body.state) {
//             req.body.state = "USA";
//         }
//         places[id] = req.body;
//         res.redirect(`/places/${id}`);
//     }
// });

// router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         res.render('/places')
//     }
// })

// module.exports = router