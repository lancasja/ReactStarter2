if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

/* Main */
var React = require('react');
var Routes = require('./routes');

React.render(Routes, document.querySelector('.container'));























