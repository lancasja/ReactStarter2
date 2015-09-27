var Reflux = require('reflux');
var LoginActions = require('../actions/login-actions');
var Api = require('../utils/api');


module.exports = Reflux.createStore({
  listenables: [LoginActions],
  
  init: function() {
      this.loginData = {};
  },
  
  loginUser: function() {
    this.loginData.url = Api.getLoginUrl();
    this.triggerChange();
  },
  
  userIsLoggedIn: function() {
    this.loginData.userIsLoggedIn = Api.getCookie('authenticated');
    this.triggerChange();
  },
  
  triggerChange: function() {
    this.trigger('change', this.loginData);
  }
});