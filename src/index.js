import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import categories from "./reducers/index";

const store = createStore(categories);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
