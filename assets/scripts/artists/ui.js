'use strict'

const showArtistsTemplate = require('../templates/artist-listing.handlebars')

const createArtistSuccess = () => {

}

const failure = () => {

}

const getArtistsSuccess = (data) => {
  const showArtistsHtml = showArtistsTemplate({ artists: data.artist })
  $('.content').html(showArtistsHtml)
}

const updateArtistSuccess = () => {

}

const deleteArtistSuccess = () => {

}

module.exports = {
  createArtistSuccess,
  failure,
  getArtistsSuccess,
  updateArtistSuccess,
  deleteArtistSuccess
}
