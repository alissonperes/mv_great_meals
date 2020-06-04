import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import Catalogue from "./components/Catalogue";
import * as serviceWorker from "./serviceWorker";
import categories from "./reducers/index";

const store = createStore(categories);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Catalogue} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
