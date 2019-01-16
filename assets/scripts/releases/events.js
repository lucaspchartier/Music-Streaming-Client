'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateRelease = (event) => {
  event.preventDefault()
  const releaseData = getFormFields(event.target)
  api.createRelease(releaseData)
    .then(ui.createReleaseSuccess)
    .then(() => api.getReleases())
    .then(ui.getReleasesAutoSuccess)
    .catch(ui.failure)
}

const onUpdateRelease = (event) => {
  event.preventDefault()
  const releaseData = getFormFields(event.target)
  api.updateRelease(releaseData)
    .then(ui.updateReleaseSuccess)
    .then(() => api.getReleases())
    .then(ui.getReleasesAutoSuccess)
    .catch(ui.failure)
}

const onDeleteRelease = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  api.deleteRelease(id)
    .then(ui.deleteReleaseSuccess)
    .then(() => api.getReleases())
    .then(ui.getReleasesAutoSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#create-release-form').on('submit', onCreateRelease)
  $('#update-release-form').on('submit', onUpdateRelease)
  $('.release-list').on('click', '.delete-release', onDeleteRelease)
}

module.exports = {
  addHandlers
}
