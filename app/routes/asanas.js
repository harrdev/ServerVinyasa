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

const asanaDb = require('../models/asana')

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `res.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

router.get('/', (req, res, next)=> {
    // console.log("Request from server before db call")
    asanaDb.find()
        .then((asanas) => {
            console.log("Server-side fetch req received", asanas)
            return asanas.map((asana) =>
            asana.toObject())
        })
        .then((asanas) => res.status(200).json({
            asanas: asanas }))
        .catch(next)
})

module.exports = router