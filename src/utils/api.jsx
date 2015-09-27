var Fetch = require('whatwg-fetch');
var querystring = require('query-string');

var LoginConstants = require('../constants/login-constants');
var LOGIN_URL = LoginConstants.LOGIN_URL;
var CLIENT_ID = LoginConstants.SPOTIFY_CREDS.CLIENT_ID;
var REDIRECT_URL = LoginConstants.REDIRECT_URL;
var SCOPE = LoginConstants.SPOTIFY_CREDS.SCOPE;

module.exports = {
  
  getLoginUrl: function() {
    return 'http://localhost:3001/auth/spotify'
  },
  
  getCookie: function(key) {
    var cookies = document.cookie.split(';');
    
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      
      if (cookie.includes(key)) {
        var cookiePair = cookie.split('=');
        var cookieValue = cookiePair[1].replace(' ', '');
        return cookieValue;
      }  
    }
  }
}