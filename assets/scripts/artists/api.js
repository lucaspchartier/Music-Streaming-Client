'use strict'

const config = require('../config')
const store = require('../store')

const createArtist = function () {
  return $.ajax({
    url: config.apiUrl + '/artists',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getArtists = function () {
  return $.ajax({
    url: config.apiUrl + '/artists',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateArtist = function (id) {
  return $.ajax({
    url: config.apiUrl + `/artists/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteArtist = function (id) {
  return $.ajax({
    url: config.apiUrl + `/artists/${id}`,
    method: 'DELETE',
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
