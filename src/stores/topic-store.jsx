var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  // Listening to all of our actions
  // Will attempt to run a method with the same name as the action
  listenables: [Actions],
  
  getTopics: function() {
    return Api.get('topics/defaults')
      .then(function(json) {
        this.topics = json.data
        this.triggerChange();
      }.bind(this));
  },
  
  triggerChange: function() {
    /*
      trigger is provided by reflux
      Let's the whole app know that an event has occured
      ('name of the event', data.to.share)
    */
    this.trigger('change', this.topics);
  }
});