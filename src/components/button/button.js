import m from 'mithril';

const Button = {
  view(vnode) {
    return m('button', {
      onclick: vnode.attrs.events.onclick,
    }, vnode.attrs.label);
  },
};

export default Button;
