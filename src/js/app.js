import React from "react";
import thunk from "redux-thunk";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Dashboard from "./mainApp/Dashboard";
import rootReducer from "./mainApp/reducers";
import "babel-polyfill";
import styles from "../css/styles.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

render(<App />, document.getElementById("app"));
