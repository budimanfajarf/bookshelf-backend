const booksHandler = require('./booksHandler');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: booksHandler.index,
  },
  {
    method: 'POST',
    path: '/books',
    handler: booksHandler.store,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: booksHandler.show,
  },
];

module.exports = routes;
