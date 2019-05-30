'use strict'

const store = require('./../store.js')

const signUpSuccess = (signUpResponse) => {
  $('.auth-message').html('Signed up successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(() => $('.auth-message').empty(), 500)
}

const failure = (failureResponse) => {
  $('.auth-message').html('Error: Something went wrong.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(() => $('.auth-message').empty(), 500)
}

const passwordsDontMatch = (failureResponse) => {
  $('.auth-message').html('Passwords do not match.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(() => $('.auth-message').empty(), 500)
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  $('.auth-message').html('Logged in successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('.sign-up-form').slideUp(500)
  $('.sign-in-form').slideUp(500)
  $('#change-password-btn').show()
  $('#sign-out-btn').show()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('#create-artist-btn').show()
  $('#get-artists-btn').show()
  $('#update-artist-form').show()
  $('#content').show()
  setTimeout(() => $('.auth-message').empty(), 500)
}

const changePasswordSuccess = (changePasswordResponse) => {
  $('.auth-message').html('Password changed successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(() => $('.auth-message').empty(), 500)
}

const signOutSuccess = () => {
  $('.auth-message').html('Logged out successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('#change-password-form').trigger('reset')
  $('#change-password-form').slideUp(500)
  $('#change-password-btn').hide()
  $('#sign-out-btn').hide()
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('#create-artist-form').trigger('reset')
  $('#create-artist-form').slideUp(500)
  $('#create-artist-btn').hide()
  $('#get-artists-btn').hide()
  $('#update-artist-form').hide()
  $('.artist-list').empty()
  setTimeout(() => $('.auth-message').empty(), 500)
}

module.exports = {
  signUpSuccess,
  failure,
  passwordsDontMatch,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
