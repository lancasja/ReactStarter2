var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
var MainStore = require('../stores/main-store');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(MainStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      data: []
    }
  },
  componentWillMount: function() {
    Actions.getData();
  },
  render: function() {
    return (
      <div className="row">
        
      </div>
    );
  },
  onChange: function(event, data) {
    this.setState({
      data: data
    });
  }
});