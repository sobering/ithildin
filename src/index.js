import m from 'mithril';
import Button from './components/button/button';

const StyleGuide = {
  view() {
    return m('.style-guide', [
      m(Button, {
        label: 'Press me',
        events: {
          onclick() {
            alert('I got pressed');
          },
        },
      }),
    ]);
  },
};

const app = document.querySelector('.app');
m.mount(app, StyleGuide);
