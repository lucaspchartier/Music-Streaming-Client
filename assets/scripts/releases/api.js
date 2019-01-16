'use strict'

const config = require('../config')
const store = require('../store')

const createRelease = function (releaseData) {
  return $.ajax({
    url: config.apiUrl + '/releases',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(releaseData)
  })
}

const updateRelease = function (releaseData) {
  return $.ajax({
    url: config.apiUrl + `/releases/${releaseData.release.id}`,
    method: 'PATCH',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: JSON.stringify(releaseData)
  })
}

const deleteRelease = function (id) {
  return $.ajax({
    url: config.apiUrl + `/releases/${id}`,
    method: 'DELETE',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createRelease,
  updateRelease,
  deleteRelease
}
