import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Table from "./components/Table";
import './assets/styles/style.css';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware())
);

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Table/>
              <ToastContainer/>
          </div>
      </Provider>
  );
}

export default App;
