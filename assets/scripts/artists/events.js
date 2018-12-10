'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./../store.js')

const onCreateArtist = (event) => {
  event.preventDefault()
  const artistData = getFormFields(event.target)
  console.log(artistData)
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
  const id = $(event.target).closest('section').data('id')
  api.updateArtist(id)
    .then(() => onGetArtists(event))
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
  $('#getArtistsButton').on('click', onGetArtists)
  $('.content').on('click', '.update-artist', onUpdateArtist)
  $('.content').on('click', '.delete-artist', onDeleteArtist)
}

module.exports = {
  addHandlers
}
