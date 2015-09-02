/*
  Form elements can be CONTROLLED (Bound to this.state) or UNCONTROLLED
*/

var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  
  render: function() {
    return(
      <div className="input-group">
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
          type="text"
          className="form-control" />
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}
            className="btn btn-default"
            type="button">
            Add
          </button>
        </span>
      </div>
    );
  },
  
  handleClick: function() {
    // Send text inpit to Firebase
    this.props.itemsStore.push({
      text: this.state.text,
      done: false
    });
    
    this.setState({
      text: ''
    });
  },
  
  handleInputChange: function(event) {
    // Input
    this.setState({
      text: event.target.value
    });
  }
});