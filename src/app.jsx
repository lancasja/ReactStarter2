/*
  -- Main --
  * Top Level - Renders all children
  * Collect data from Firebase
*/
var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var fireBaseRootUrl = 'https://jlreacttodo.firebaseio.com/';

var App = React.createClass({
  // Mixin: Copy all ReactFire methods to component
  mixins: [ ReactFire ],
  componentWillMount: function() {
      /*
        Run exactly one time, when rendered to DOM.
      */
      // Initialize Firebase
      // bindAsObject() comes from ReactFire
      this.fb = new Firebase(fireBaseRootUrl + 'items/');
      this.bindAsObject(this.fb, 'items')
      // Run handler after data has been loaded
      this.fb.on('value', this.handleDataLoaded);
  },
  
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },
  
  render: function() {
    
    return (
      <div className="wrapper">
        <h2 className="text-center">React Starter</h2>
        
        <div className={'content ' + (this.state.loaded ? 'loaded' : '')}>
          <div className="text-center">With Firebase & Live Reload</div>
        </div>
      </div>
    );
  },
  
  handleDataLoaded: function() {
    this.setState({
      loaded: true
    });
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));























