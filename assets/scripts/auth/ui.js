'use strict'

const store = require('./../store.js')

const signUpSuccess = () => {
  $('.auth-message').html('Signed up successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const failure = () => {
  $('.auth-message').html('Error: Something went wrong.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const passwordsDontMatch = () => {
  $('.auth-message').html('Passwords do not match.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const signInSuccess = signInResponse => {
  store.user = signInResponse.user
  $('.auth-message').html('Logged in successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').slideUp(500)
  $('#sign-up-btn').hide()
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').slideUp(500)
  $('#sign-in-btn').hide()
  $('#change-password-btn').show()
  $('#sign-out-btn').show()
  $('#create-artist-btn').show()
  $('#update-artist-btn').show()
  $('#get-artists-btn').show()
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const changePasswordSuccess = () => {
  $('.auth-message').html('Password changed successfully!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
}

const changePasswordFailure = () => {
  $('.auth-message').html('New password cannot match old password.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(() => $('.auth-message').empty(), 2000)
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
  $('#update-artist-form').trigger('reset')
  $('#update-artist-form').slideUp(500)
  $('#update-artist-btn').hide()
  $('#get-artists-btn').hide()
  $('.artist-list').empty()
  setTimeout(() => $('.auth-message').empty(), 2000)
}

module.exports = {
  signUpSuccess,
  failure,
  passwordsDontMatch,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
