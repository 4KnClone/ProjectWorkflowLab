'use strict'

const config = require('../config')

const onGetBooks = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET'
  })
}

module.exports = {
  onGetBooks
}
