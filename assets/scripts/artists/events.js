'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onCreateArtist = (event) => {
  event.preventDefault()
  api.createArtist()
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
  $('#createArtistButton').on('click', onCreateArtist)
  $('#getArtistsButton').on('click', onGetArtists)
  $('.content').on('click', '.update-artist', onUpdateArtist)
  $('.content').on('click', '.delete-artist', onDeleteArtist)
}

module.exports = {
  addHandlers
}
