const APIError = require('../utils/error');
const { dataInMemory: frozenData, limitArray } = require('../utils/util');

const controller = {};

// get all books
controller.getAllBooks = ({ limit, skip }) => {
  let [...books] = frozenData.books;
  const total = books.length;

  if (skip > 0) {
    books = books.slice(skip);
  }

  books = limitArray(books, limit);

  const result = { books, total, skip, limit: books.length };

  return result;
};

// get random quote
controller.getRandomBook = () => {
  const { books } = frozenData;

  const randomIdx = Math.floor(Math.random() * books.length);

  return books[randomIdx];
};

// get quote by id
controller.getBookById = ({ id }) => {
  const quoteFrozen = frozenData.books.find(u => u.id.toString() === id);

  if (!quoteFrozen) {
    throw new APIError(`Quote with id '${id}' not found`, 404);
  }

  return quoteFrozen;
};

module.exports = controller;
