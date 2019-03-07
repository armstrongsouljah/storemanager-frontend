/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from "react";
import { render, } from "react-dom";
import { Provider, } from "react-redux";
import Routes from "./routes/index";
import store from "./store";
import "./assets/css/styles.css";


const rootElem = document.querySelector("#root");
render(
  <Provider store={store}>
        <Routes />
  </Provider>, rootElem
);
