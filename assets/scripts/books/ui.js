'use strict'
const showBooksTemplate = require('../templates/main.handlebars')

const onGetBooksSuccess = function (data) {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.book-info').append(showBooksHtml)
}

const onGetBooksFailure = function (error) {
  console.error(error)
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
