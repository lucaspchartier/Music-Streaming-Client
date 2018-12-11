'use strict'

const showArtistsTemplate = require('../templates/artist-listing.handlebars')
const store = require('./../store.js')

const createArtistSuccess = (createArtistResponse) => {
  store.artist = createArtistResponse.artist
  $('.get-artists-message').html('Successfully created artist!')
  $('.get-artists-message').addClass('success-message')
  $('.get-artists-message').removeClass('error-message')
  setTimeout(function () {
    $('.get-artists-message').empty()
  }, 2000)
}

const failure = () => {
  $('.artist-message').html('Error: Something went wrong.')
  $('.artist-message').addClass('error-message')
  $('.artist-message').removeClass('success-message')
  setTimeout(function () {
    $('.artist-message').empty()
  }, 2000)
}

const getArtistsSuccess = (response) => {
  const showArtistsHtml = showArtistsTemplate({ artists: response.artists })
  $('.artist-list').html(showArtistsHtml)
  $('.get-artists-message').html('Successfully retrieved artists!')
  $('.get-artists-message').addClass('success-message')
  $('.get-artists-message').removeClass('error-message')
  setTimeout(function () {
    $('.get-artists-message').empty()
  }, 2000)
}

const getArtistsAutoSuccess = (response) => {
  const showArtistsHtml = showArtistsTemplate({ artists: response.artists })
  $('.artist-list').html(showArtistsHtml)
}

const updateArtistSuccess = (updateArtistResponse) => {
  store.artist = updateArtistResponse.artist
  $('.update-artist-message').html('Successfully updated artist!')
  $('.update-artist-message').addClass('success-message')
  $('.update-artist-message').removeClass('error-message')
  setTimeout(function () {
    $('.update-artist-message').empty()
  }, 2000)
}

const deleteArtistSuccess = () => {
  $('.delete-artist-message').html('Successfully deleted artist!')
  $('.delete-artist-message').addClass('success-message')
  $('.delete-artist-message').removeClass('error-message')
  setTimeout(function () {
    $('.delete-artist-message').empty()
  }, 2000)
}

module.exports = {
  createArtistSuccess,
  failure,
  getArtistsSuccess,
  getArtistsAutoSuccess,
  updateArtistSuccess,
  deleteArtistSuccess
}
