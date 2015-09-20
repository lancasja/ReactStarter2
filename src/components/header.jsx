var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Reflux = require('reflux');
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  
  getInitialState: function() {
    return {
      topics: []
    }
  },
  
  componentWillMount: function() {
    Actions.getTopics();
  },
  
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mobile-links">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={'/'} className="navbar-brand">
              IMGUR-Client
            </Link>
          </div>
          
          <div className="collapse navbar-collapse" id="mobile-links">
            <ul className="nav navbar-nav navbar-right">
              {this.renderTopics()}
            </ul>
          </div>
        </div>
      </nav>
    );
  },
  
  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic) {
      return (
        <li key={topic.id}>
          <Link to={'topics/' + topic.id}>
            {topic.name}
          </Link>
        </li>
      );
    });
  },
  
  onChange: function(event, topics) {
    this.setState({
      topics: topics
    });
  }
});