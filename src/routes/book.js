const router = require('express').Router();
const {
  getAllBooks,
  getRandomBook,
  getBookById,
} = require('../controllers/book');

// get all quotes
router.get('/', (req, res) => {
  res.send(getAllBooks({ ...req._options }));
});

// get random quote
router.get('/random', (req, res) => {
  res.send(getRandomBook());
});

// get quote by id
router.get('/:id', (req, res) => {
  res.send(getBookById({ ...req.params }));
});

module.exports = router;
