import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPlane,
  faCar,
  faUtensils,
  faBed,
  faTrain,
  faArrowLeft,
  faPlaneDeparture,
  faPlaneArrival,
  faChevronDown,
  faChevronUp,
  faGolfBall,
  faStar,
  faMapMarkedAlt,
  faCloudSun,
  faHiking,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faPlane,
  faCar,
  faUtensils,
  faBed,
  faTrain,
  faArrowLeft,
  faPlaneDeparture,
  faPlaneArrival,
  faChevronDown,
  faChevronUp,
  faGolfBall,
  faStar,
  faMapMarkedAlt,
  faCloudSun,
  faHiking
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
