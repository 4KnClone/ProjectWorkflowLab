'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetBooks = function () {
  api.onGetBooks()
    .then(ui.onGetBooksSuccess)
    .catch(ui.onGetBooksFailure)
}

const setEventListeners = function () {
  $('.get-all-books').on('click', onGetBooks)
}

module.exports = {
  setEventListeners
}
