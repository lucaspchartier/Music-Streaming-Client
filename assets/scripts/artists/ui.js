'use strict'

const showArtistsTemplate = require('../templates/artist-listing.handlebars')
// const store = require('./../store.js')

const createArtistSuccess = () => {
  $('.artist-message').html('Successfully created artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
  // $('.artist-message').empty('success-message')
}

const failure = () => {
  $('.artist-message').html('Error: Something went wrong.')
  $('.artist-message').addClass('error-message')
  $('.artist-message').removeClass('success-message')
  // $('.artist-message').empty('error-message')
}

const getArtistsSuccess = (response) => {
  console.log('This is getArtists', response)
  const showArtistsHtml = showArtistsTemplate({ artists: response.artists })
  $('.artist-list').html(showArtistsHtml)
  $('.artist-message').html('Successfully retrieved artists!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
  // $('.artist-message').empty('success-message')
}

const updateArtistSuccess = () => {
  console.log('This is updateArtist', updateArtistSuccess)
  $('.artist-message').html('Successfully updated artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
  // $('.artist-message').empty('success-message')
}

const deleteArtistSuccess = () => {
  console.log('This is deleteArtist', deleteArtistSuccess)
  $('.artist-message').html('Successfully deleted artist!')
  $('.artist-message').addClass('success-message')
  $('.artist-message').removeClass('error-message')
  // $('.artist-message').empty('success-message')
}

module.exports = {
  createArtistSuccess,
  failure,
  getArtistsSuccess,
  updateArtistSuccess,
  deleteArtistSuccess
}
