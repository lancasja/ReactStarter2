var React = require('react');
var LoginActions = require('../actions/login-actions');
var Router = require('react-router');

module.exports = React.createClass({
  mixins: [
    Router.Navigation
  ],
  
  componentWillMount: function() {
    LoginActions.getToken('token');
    this.transitionTo('/home');
  },
  
  render: function() {
    return(
      <div>
        Authorization Component
      </div>
    );
  }
});