/************* global require *************/
require('./modules/dotenv-init')()
const express = require('express')
const app = express()
const path = require('path')
const { connect } = require('./schemas')()

const method = require('./middlewares/method-mw')
const logger = require('./middlewares/morgan-mw')
const locals = require('./middlewares/locals-mw')


/*************** server init **************/
require('./modules/server-init')(app, process.env.PORT)


/*************** static init **************/
app.use('/', express.static(path.join(__dirname, 'public')))


/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(method())


/***************** locals *****************/
app.use(locals)


/*************** logger init **************/
app.use(logger)


/*************** router init **************/
/* const bookRouter = require('./routes/book')

app.use('/book', bookRouter) */


/**************** error init **************/
const _404Router = require('./routes/error/404-router')
const _500Router = require('./routes/error/500-router')
const { nextTick } = require('process')

app.use(_404Router)
app.use(_500Router)

