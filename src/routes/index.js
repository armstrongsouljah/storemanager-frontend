import React from "react";
import { Route, BrowserRouter as Router, } from "react-router-dom";
import App from "../views/App";

const Routes = () => (
    <Router>
        <div>
            <Route path='/' exact component={App} />
            <Route path='/products' exact component={() => (<h1>Products page</h1>)} />
        </div>
    </Router> 
);

export default Routes;
