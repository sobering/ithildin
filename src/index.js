var m = require('mithril');
var Button = require('./components/button/button');

var StyleGuide = {
  view: function() {
    return m('.style-guide', [
      m(Button, {
        label: 'Press me',
        events: {
          onclick: function() {
            alert('I got pressed');
          },
        },
      }),
    ]);
  }
};

var app = document.querySelector('.app');
m.mount(app, StyleGuide);
