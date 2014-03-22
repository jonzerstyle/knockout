goog.require('goog.dom');
goog.require('hello.js')

function sayHi() {
  //var newHeader = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
  //  'This is from mygoog.js!');
  var newHeader = goog.dom.createDom('h1', {'style': 'background-color:#EEE'},
    hello.greet("From mygoog.js"));
  goog.dom.appendChild(document.body, newHeader);
}
