/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, } from "react";
import { Redirect, } from "react-router-dom";

import Dashboard from "../components/Dashboard";


class DashboardView extends Component {
    render() {
        const token = localStorage.getItem("token");
        if (!token) {
            return (
              <Redirect to="/" />
            );
        }
        return (
          <Dashboard />
        );
    }
}


export default DashboardView;
