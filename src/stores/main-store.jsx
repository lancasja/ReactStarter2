/*
  /src/stores/main-store.jsx
  
  1. Listen for actions defined in actions.jsx
  2. Define methods to handle Data from Api
  3. Alert the app when a change occurs and pass the new data
*/

var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  // Listening to all of our actions
  // Will attempt to run a method with the same name as the action
  listenables: [Actions],
  getData: function() {
    return Api.get('browse/new-releases?country=US&limit=10')
      .then(function(json) {
        this.data = json || { error: 'no json data recieved' };
        this.triggerChange();
      }.bind(this));
  },
  
  triggerChange: function() {
    /*
      trigger is provided by reflux
      Lets the whole app know that an event has occured
      trigger('name of the event', data.to.share)
    */
    this.trigger('change', this.data);
  }
});