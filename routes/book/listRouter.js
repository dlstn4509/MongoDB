const path = require('path')
const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const Books = require('../../schemas/Books')

router.use('/create', async (req, res, next) => {
  try {
    const book = new Books({
      title: '홍길동전',
      writer: '허균',
      content: '아버지를 아버지라..'
    })
    console.log(Date.now())
    const rs = await book.save() // 새로운 book 을 mongoDB에 저장 메서드
    res.json(rs)
  }
  catch (err) {
    next(createError(err))
  }
})

module.exports = router