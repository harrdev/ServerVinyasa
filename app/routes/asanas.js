const express = require('express')
const mongoose = require('mongoose')
// jsonwebtoken docs: https://github.com/auth0/node-jsonwebtoken
const crypto = require('crypto')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')
// bcrypt docs: https://github.com/kelektiv/node.bcrypt.js
const bcrypt = require('bcrypt')

// see above for explanation of "salting", 10 rounds is recommended
const bcryptSaltRounds = 10

// pull in error types and the logic to handle them and set status codes
const errors = require('../../lib/custom_errors')

const BadParamsError = errors.BadParamsError
const BadCredentialsError = errors.BadCredentialsError
// *********************** Imported models to integrate with database *************** //
const Asana = require('../models/asana')
const userAsana = require('../models/userPractice')

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `res.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// *************************** Get Route to display all poses ************************//
router.get('/', (req, res, next) => {
    Asana.find()
        .then((asanas) => {
            console.log("These are the mapped asanas: ", asanas.map((asana => asana.toObject())))
            return asanas
        })
        .then((asanas) => res.status(200).json({
            asanas: asanas
        }))
        .catch(next)
})

// ****************** Post Route to save to userPractice collection *************//
router.post('/createroutine', requireToken, (req, res, next) => {
    console.log("Server-side POST route hit!", req)
    req.body.info.owner = req.user.id
    userAsana.create({
        englishName: req.body.info.englishName,
        sanskritName: req.body.info.sanskritName,
        difficulty: req.body.info.difficulty,
        imageUrl: req.body.info.imageUrl,
        description: req.body.info.description,
        owner: req.body.info.owner
    })
    .then(addedPose => {
        res.json({ message: "Pose added!", addedPose })
    })
    .catch(next)
})

module.exports = router