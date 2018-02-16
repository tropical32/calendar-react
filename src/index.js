import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import { Provider } from "react-redux";
import logger from "redux-logger";
import openSocket from "socket.io-client";

import reducers from "./reducers";
import Calendar from "./containers/calendar";

const createStoreWithMiddleware = applyMiddleware(logger, promise)(createStore);

const socket = openSocket("http://localhost:8000");

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Calendar socket={socket} />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
