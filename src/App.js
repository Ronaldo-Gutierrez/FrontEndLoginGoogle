import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import GoogleData from "./components/GoogleData";
import GuardRoute from "./components/GuardRoute";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <GuardRoute path="/GoogleData" component={GoogleData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
