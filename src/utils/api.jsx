/*
  /src/utils/api.jsx
  Point of contact with the outside world
*/

var Fetch = require('whatwg-fetch');
var baseUrl = 'https://api.spotify.com/v1/';
var apiKey = '';

module.exports = {
  get: function(url) {
    return fetch(baseUrl + url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      }
    })
    .then(function(response) {
      return response.json();
    });
  }
};