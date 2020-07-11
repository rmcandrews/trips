import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import TripsPage from "./pages/Trips";
import TripPage from "./pages/Trip";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <TripPage />
        </Route>
        <Route path="/">
          <TripsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
