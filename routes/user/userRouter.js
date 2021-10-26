const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { Users } = require('../../schemas')
const bcrypt = require('bcrypt')

router.get('/create', async (req, res, next) => {
  try {
    // const { userid, username, userpw } = req.body;
    // const { userid, username, userpw } = newUser;
    
    const newUser = { userid: 'dlstnss', userpw: '1111', username: '인수' }
    const user = new Users(newUser);
    const rs = await user.save()
    res.status(200).json(rs)
  }
  catch (err) {
    next(createError(err))
  }
})

router.get('/login', async (req, res, next) => {
  try {
    const user = await Users.login('dlstnss', '1111')
    user ? res.status(200).json(user) : res.status(401).json({err: '로그인x'})
  }
  catch (err) {
    next(createError(err))
  }
})

router.get('/find', async (req, res, next) => {
  try {
    const users = await Users.findByName(req.query.name)
    users ? res.status(200).json(users) : res.status(401).json({err: '이름 없음'})
  }
  catch (err) {
    next(createError(err))
  }
})



module.exports = router
