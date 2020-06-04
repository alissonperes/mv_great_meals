import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Catalogue from "./components/Catalogue";
import store from "./store";
const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Catalogue} />
      <Route path="/recipe/:id" component={Catalogue} />
      <Route component={Catalogue} />
    </Router>
  </Provider>,

  root
);

serviceWorker.unregister();
