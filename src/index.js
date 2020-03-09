import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
//import Testing from './Testing';

axios.defaults.baseURL = "https://yummy-food-api.herokuapp.com";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
