var m = require('mithril');

var Button = {
  view: function(vnode) {
    return m('button', {
      onclick: vnode.attrs.events.onclick
    }, vnode.attrs.label);
  }
};

module.exports = Button;
