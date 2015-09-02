/*
  -- Main --
  * Top Level - Renders all children
  * Collect data from Firebase
  
  Header
    Add new todos
    
  List
    List Items
*/
var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var Header = require('./header');

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
      this.bindAsObject(new Firebase(fireBaseRootUrl + 'items/'), 'items')
  },
  
  render: function() {
    console.log(this.state);
    
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-ofset-2">
          <h2 className="text-center">React Todo</h2>
          
          <Header itemsStore={this.firebaseRefs.items} />
        </div>
      </div>
    );
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));























