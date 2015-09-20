/* Core Dependencies */
var React       = require('react');

/* Router Dependencies */
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;

/* Component Dependencies */
var Main        = require('./components/main');
var Topic       = require('./components/topic');

/* Router Configuration */
module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
    </Route>
  </Router>
);