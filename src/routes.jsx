/* Core Dependencies */
var React = require('react');

/* Router Dependencies */
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Redirect = Router.Redirect;
var Authenticated = require('./components/authenticated');

/* Component Dependencies */
var Main = require('./components/main');
var Login = require('./components/login');
var Auth = require('./components/authenticated');
var Home = require('./components/home');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="/auth">
        <Route path="/login" component={Login} />
        <Route path="/authenticated" component={Authenticated} />
      </Route>
      <Route path="/home" component={Home} />
    </Route>
  </Router>
);