const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { Books } = require('../../schemas')

router.use('/create', async (req, res, next) => {
  try {
    const book = new Books({
      title: '홍길동전',
      writer: '허균',
      content: '아버지를 아버지라..'
    })
    const rs = await book.save() // 새로운 book 을 mongoDB에 저장 메서드
    res.json({ rs, book, Books })
  }
  catch (err) {
    next(createError(err))
  }
})

router.use('/update', async (req, res, next) => {
  try {
    const newBook = {
      id: '6176526a10c905ebfe8d9da7',
      title: '허생전',
      writer: '허생',
      content: '수정내용'
    }
    const { id, title, writer, content } = newBook;
    const book = await Books.findByIdAndUpdate(
      id,
      {
        title,
        writer,
        content,
      }, {
        new: true,
      })
    res.status(200).json({ book })
  }
  catch (err) {
    next(createError(err))
  }
})

router.get('/delete/:id', async (req, res, next) => {
  try {
    const book = await Books.findByIdAndDelete(req.params.id)
    res.status(200).json(book)
  }
  catch (err) {
    next(createError(err))
  }
})

router.use('/list', async (req, res, next) => {
  try {
    const books = await Books.find()
    res.json(books)
  }
  catch (err) {
    next(createError(err))
  }
})

module.exports = router
