import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';

const render = () => {

  logState();

  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
}

render();

store.subscribe(render);

function logState() {
  console.log("%c Rendered with 👉 👉 👇", );
  console.log(store.getState());
}
