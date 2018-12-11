'use strict'

const store = require('./../store.js')

const signUpSuccess = function (signUpResponse) {
  $('.auth-message').html('Sign up successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 1000)
}

const failure = function (failureResponse) {
  $('.auth-message').html('Error: Something went wrong.')
  $('.auth-message').addClass('error-message')
  $('.auth-message').removeClass('success-message')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 1000)
}

const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('.auth-message').html('Login successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('.content').removeClass('hidden')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 1000)
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.auth-message').html('Password change successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 1000)
}

const signOutSuccess = function (signOutResponse) {
  $('.auth-message').html('Logout successful!')
  $('.auth-message').addClass('success-message')
  $('.auth-message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.content').addClass('hidden')
  setTimeout(function () {
    $('.auth-message').empty()
  }, 1000)
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess
}
