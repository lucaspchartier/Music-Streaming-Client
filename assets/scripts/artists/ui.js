'use strict'

const showArtistsTemplate = require('../templates/artist-listing.handlebars')
// const store = require('./../store.js')

const createArtistSuccess = () => {
  $('.artist-message').html('Successfully created artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
}

const failure = () => {
  $('.artist-message').html('Error: Something went wrong.')
  $('.artist-message').addClass('error-message')
  $('.artist-message').removeClass('success-message')
}

const getArtistsSuccess = (data) => {
  const showArtistsHtml = showArtistsTemplate({ artists: data.artist })
  $('.content').html(showArtistsHtml)
  $('.artist-message').html('Successfully retrieved artists!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
}

const updateArtistSuccess = () => {
  $('.artist-message').html('Successfully updated artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
}

const deleteArtistSuccess = () => {
  $('.artist-message').html('Successfully deleted artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
}

module.exports = {
  createArtistSuccess,
  failure,
  getArtistsSuccess,
  updateArtistSuccess,
  deleteArtistSuccess
}
