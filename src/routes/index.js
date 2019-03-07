import React from "react";
import { Route, BrowserRouter as Router, } from "react-router-dom";
import App from "../views/App";
import DashboardView from "../views/DashboardView";

const Routes = () => (
    <Router>
    <div>
            <Route path="/" exact component={App} />
            <Route path="/dashboard" exact component={DashboardView} />
      </div>
  </Router>
);

export default Routes;
