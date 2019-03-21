'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// const onCreateRelease = (event) => {
//   event.preventDefault()
//   const releaseData = getFormFields(event.target)
//   api.createRelease(releaseData)
//     .then(ui.createReleaseSuccess)
//     .then(() => api.getArtists())
//     .then(ui.getArtistsAutoSuccess)
//     .catch(ui.failure)
// }
//
// const onUpdateRelease = (event) => {
//   event.preventDefault()
//   const releaseData = getFormFields(event.target)
//   api.updateRelease(releaseData)
//     .then(ui.updateReleaseSuccess)
//     .then(() => api.getArtists())
//     .then(ui.getArtistsAutoSuccess)
//     .catch(ui.failure)
// }

const onDeleteRelease = (event) => {
  event.preventDefault()
  // debugger
  const id = $(event.target).closest('section').data('id')
  console.log(id)
  api.deleteRelease(id)
    .then(ui.deleteReleaseSuccess)
    .then(() => api.getArtists())
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
