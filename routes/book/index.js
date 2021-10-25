const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util')


const listRouter = require('./listRouter')

router.use('/', listRouter)


module.exports = router