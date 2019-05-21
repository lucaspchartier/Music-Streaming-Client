'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const artistEvents = require('./artists/events.js')
const releaseEvents = require('./releases/events.js')

$(() => {
  // Auth events
  authEvents.addHandlers()

  // Arists events
  artistEvents.addHandlers()

  // Releases events
  releaseEvents.addHandlers()

  // Form toggles
  $('#sign-up-btn').click(function () {
    $('.sign-up-form').slideDown(500)
    $('.sign-in-form').slideUp(500)
  })
  $('#sign-in-btn').click(function () {
    $('.sign-in-form').slideDown(500)
    $('.sign-up-form').slideUp(500)
  })
  $('#change-password-btn').click(function () {
    $('.change-password-form').slideDown(500)
    $('.create-artist-form').slideUp(500)
  })
  $('#create-artist-btn').click(function () {
    $('.create-artist-form').slideDown(500)
    $('.change-password-form').slideUp(500)
  })
})
