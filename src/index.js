import * as React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducers } from "./reducers/index";

const store = createStore(reducers);
const rootElement = document.getElementById("root");
ReactDOM.render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </StrictMode>,
  rootElement
);
