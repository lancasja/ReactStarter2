/*
  Point of contact with imgur API
*/

var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '986b5ea16237c12';

module.exports = window.Api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'AUTHORIZATION': 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json();
    });
  }
};