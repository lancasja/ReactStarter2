var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var LoginStore = require('../stores/login-store');
var LoginActions = require('../actions/login-actions');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(LoginStore, 'userIsLoggedIn'),
    Router.Navigation
  ],
  
  getInitialState: function() {
    return {
      userIsLoggedIn: false,
      loaded: false
    }
  },
  
  componentWillMount: function() {
    LoginActions.userIsLoggedIn();
  },
  
  componentDidMount: function() {
    this.setState({
      loaded: true
    });
  },
  
  render: function() {
    return (
      <div>
        <header className="row">
          <h1 className="text-center">Spotify Playlists</h1>
        </header>
        <div className={'content ' + (this.state.loaded ? 'loaded' : '')}>
          {this.props.children}
        </div>
      </div>
    );
  },
  
  userIsLoggedIn: function(event, loginData) {
    if (loginData.userIsLoggedIn) {
      this.setState({
        userIsLoggedIn: loginData.userIsLoggedIn,
        loginUrl: loginData.url
      });
    } else {
      this.transitionTo('/auth/login');
    }
  }
});