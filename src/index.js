import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CatalogueItems from './containers/CatalogueItems';
import Item from './components/Item';
import CatalogueList from './containers/CatalogueList';
import store from './store';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CatalogueList />
      <Route exact path="/" component={CatalogueItems} />
      <Route exact path="/item/:id" component={Item} />
    </Router>
  </Provider>,

  root,
);
