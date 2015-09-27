/*
  1. Render input for authentication
  2. Call the AuthService when the login button is clicked
*/
var React = require('react/addons');
var Reflux = require('reflux');
var LoginStore = require('../stores/login-store');
var Link = require('react-router').Link;
var LoginActions = require('../actions/login-actions');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(LoginStore, 'loginData')
  ],
  
  componentWillMount: function() {
    LoginActions.loginUser();
  },
  
  getInitialState: function() {
    return {
      loginUrl: ''
    }
  },
  
  render: function() {
    return(
      <div className="col-xs login-wrapper">
        <h2>Login Page</h2>
        <a
          href={this.state.loginUrl}
          className="loginButton">
          Login to Spotify
        </a>
      </div>
    );
  },
  
  loginData: function(event, loginData) {
    this.setState({
      loginUrl: loginData.url
    });
  }
});