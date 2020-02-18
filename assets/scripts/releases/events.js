'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const releaseApi = require('./api.js')
const artistApi = require('../artists/api.js')
const artistEvents = require('../artists/events.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onCreateRelease = event => {
  event.preventDefault()
  const releaseData = getFormFields(event.target)
  $(event.target).trigger('reset')
  releaseApi.createRelease(releaseData)
    .then(ui.createReleaseSuccess)
    .then(() => artistApi.getArtists())
    .then(ui.getArtistsAutoSuccess)
    .catch(ui.failure)
}

// const onUpdateRelease = event => {
//   event.preventDefault()
//   const releaseData = getFormFields(event.target)
//   $(event.target).trigger('reset')
//   releaseApi.updateRelease(releaseData)
//     .then(ui.updateReleaseSuccess)
//     .then(() => artistApi.getArtists())
//     .then(ui.getArtistsAutoSuccess)
//     .catch(ui.failure)
// }

const onDeleteRelease = event => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  releaseApi.deleteRelease(id)
    .then(ui.deleteReleaseSuccess)
    .then(() => artistEvents.onGetArtists())
}

const addReleaseToModalClick = () => {
  $(document).on('click', '.create-release', event => {
    const id = $(event.target).closest('section').data('id')
    console.log(event)
    $(`#create-release-${id}`).modal('show')
  })
}

const addHandlers = () => {
  $('.create-release-form').on('submit', onCreateRelease)
  addReleaseToModalClick()
  // $('.artist-list').on('submit', onUpdateRelease)
  $('.artist-list').on('click', '.delete-release', onDeleteRelease)
}

module.exports = {
  addHandlers
}
