'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./../store.js')

const onCreateArtist = (event) => {
  event.preventDefault()
  const artistData = getFormFields(event.target)
  api.createArtist(artistData)
    .then(ui.createArtistSuccess)
    .catch(ui.failure)
}

const onGetArtists = (event) => {
  event.preventDefault()
  api.getArtists()
    .then(ui.getArtistsSuccess)
    .catch(ui.failure)
}

const onUpdateArtist = (event) => {
  event.preventDefault()
  const artistData = getFormFields(event.target)
  console.log(artistData)
  api.updateArtist(artistData)
    .then(ui.updateArtistSuccess)
    .catch(ui.failure)
}

const onDeleteArtist = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  api.deleteArtist(id)
    .then(() => onGetArtists(event))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#create-artist-form').on('submit', onCreateArtist)
  $('#get-artists-button').on('submit', onGetArtists)
  $('#update-artist-form').on('submit', onUpdateArtist)
  $('.artist-list').on('click', '.delete-artist', onDeleteArtist)
}

module.exports = {
  addHandlers
}
