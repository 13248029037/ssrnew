import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './Routes';
import getClientStore from '../store';
import { Provider } from 'mobx-react';

let store = getClientStore(window.store);

const App = () => {
  return (
    <Provider {...store}>
      <BrowserRouter>
        <div>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))