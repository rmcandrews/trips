import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import TripsPage from "./pages/Trips";
import TripPage from "./pages/Trip";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/trips/:id">
          <TripPage />
        </Route>
        <Route path="/trips">
          <TripsPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/trips" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
