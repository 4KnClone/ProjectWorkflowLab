'use strict'

const onGetBooksSuccess = function (data) {
  console.log(data)
}

const onGetBooksFailure = function (error) {
  console.error(error)
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
