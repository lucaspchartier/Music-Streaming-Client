'use strict'

const store = require('./../store.js')

const createReleaseSuccess = (createReleaseResponse) => {
  store.release = createReleaseResponse.release
  $('.release-message').html('Successfully created release!')
  $('.release-message').addClass('success-message')
  $('.release-message').removeClass('error-message')
  $('.create-release-form').trigger('reset')
  setTimeout(function () {
    $('.release-message').empty()
  }, 2000)
}

const failure = () => {
  $('.release-message').html('Error: Something went wrong.')
  $('.release-message').addClass('error-message')
  $('.release-message').removeClass('success-message')
  setTimeout(() => $('.release-message').empty(), 2000)
}

const updateReleaseSuccess = (updateReleaseResponse) => {
  store.release = updateReleaseResponse.release
  $('.release-message').html('Successfully updated release!')
  $('.release-message').addClass('success-message')
  $('.release-message').removeClass('error-message')
  $('.update-release-form').trigger('reset')
  setTimeout(() => $('.release-message').empty(), 2000)
}

const deleteReleaseSuccess = () => {
  console.log('this is deleteReleaseSuccess', deleteReleaseSuccess)
  $('.release-message').html('Successfully deleted release!')
  $('.release-message').addClass('success-message')
  $('.release-message').removeClass('error-message')
  setTimeout(() => $('.release-message').empty(), 2000)
}

module.exports = {
  createReleaseSuccess,
  failure,
  updateReleaseSuccess,
  deleteReleaseSuccess
}
