'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const releaseApi = require('./api.js')
const artistApi = require('../artists/api.js')
const ui = require('./ui.js')

// const onCreateRelease = (event) => {
//   event.preventDefault()
//   const releaseData = getFormFields(event.target)
//   releaseApi.createRelease(releaseData)
//     .then(ui.createReleaseSuccess)
//     .then(() => artistApi.getArtists())
//     .then(ui.getArtistsAutoSuccess)
//     .catch(ui.failure)
// }
//
// const onUpdateRelease = (event) => {
//   event.preventDefault()
//   const releaseData = getFormFields(event.target)
//   releaseApi.updateRelease(releaseData)
//     .then(ui.updateReleaseSuccess)
//     .then(() => artistApi.getArtists())
//     .then(ui.getArtistsAutoSuccess)
//     .catch(ui.failure)
// }

const onDeleteRelease = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  releaseApi.deleteRelease(id)
    .then(ui.deleteReleaseSuccess)
    .then(() => artistApi.getArtists())
    .then(ui.getArtistsAutoSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  // $('.create-release-form').on('submit', onCreateRelease)
  // $('.artist-list').on('submit', onUpdateRelease)
  $('.artist-list').on('click', '.delete-release', onDeleteRelease)
}

module.exports = {
  addHandlers
}
