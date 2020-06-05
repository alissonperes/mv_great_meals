import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Catalogue from './components/Catalogue';
import CatalogueList from './containers/CatalogueList';
import Item from './components/Item';
import store from './store';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CatalogueList />
      <Route exact path="/" component={Catalogue} />
      <Route exact path="/item/:id" component={Item} />
    </Router>
  </Provider>,

  root,
);
