'use strict'

const config = require('../config')
const store = require('../store')

const createArtist = function (artistData) {
  return $.ajax({
    url: config.apiUrl + '/artists',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(artistData)
  })
}

const getArtists = function () {
  return $.ajax({
    url: config.apiUrl + '/artists',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateArtist = function (id) {
  return $.ajax({
    url: config.apiUrl + `/artists/${id}`,
    method: 'PATCH',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteArtist = function (id) {
  return $.ajax({
    url: config.apiUrl + `/artists/${id}`,
    method: 'DELETE',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createArtist,
  getArtists,
  updateArtist,
  deleteArtist
}
