import React from "react";
import ReactDOM from "react-dom";
import Root from "./client/Root";
import * as serviceWorker from "./serviceWorker";

// NORMALIZE
import "normalize.css";
import "scss/style.scss";

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
