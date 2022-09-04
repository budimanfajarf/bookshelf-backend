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
];

module.exports = routes;
