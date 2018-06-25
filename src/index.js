import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 3500,
  position: "bottom center"
};

const Home = () => (
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>
);

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();