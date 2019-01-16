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
})
