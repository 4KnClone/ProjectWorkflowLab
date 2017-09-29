'use strict'

const api = require('./api')
const ui = require('./ui')

const setEventListeners = function () {
  $('.get-all-books').on('click', api.onGetBooks)
    .then(ui.onGetBooksSuccess)
    .catch(ui.onGetBooksFailure)
}

module.exports = {
  setEventListeners
}
