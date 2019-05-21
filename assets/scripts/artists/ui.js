'use strict'

const showArtistsTemplate = require('../templates/artist-listing.handlebars')
const store = require('./../store.js')

const createArtistSuccess = (createArtistResponse) => {
  store.artist = createArtistResponse.artist
  $('.artist-message').html('Successfully created artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
  $('#create-artist-form').trigger('reset')
  setTimeout(function () {
    $('.artist-message').empty()
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
  $('.artist-list').empty()
  const showArtistsHtml = showArtistsTemplate({ artists: response.artists })
  $('.artist-list').html(showArtistsHtml)
  $('.artist-message').html('Successfully retrieved artists!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
  setTimeout(function () {
    $('.artist-message').empty()
  }, 2000)
}

const getArtistsAutoSuccess = (response) => {
  const showArtistsHtml = showArtistsTemplate({ artists: response.artists })
  $('.artist-list').html(showArtistsHtml)
}

const updateArtistSuccess = (updateArtistResponse) => {
  store.artist = updateArtistResponse.artist
  $('.artist-message').html('Successfully updated artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
  $('#update-artist-form').trigger('reset')
  setTimeout(function () {
    $('.artist-message').empty()
  }, 2000)
}

const deleteArtistSuccess = () => {
  $('.artist-message').html('Successfully deleted artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
  setTimeout(function () {
    $('.artist-message').empty()
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
