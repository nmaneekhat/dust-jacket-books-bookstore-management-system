const express = require('express');
const router = express.Router();
const { addBook, editBook } = require('../controllers/bookController');

router.post('/', addBook);           // POST /api/books
router.put('/:id', editBook);        // PUT /api/books/:id

module.exports = router;