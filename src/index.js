import React from "react";
import { render, } from "react-dom";
import Routes from "./routes/index";

const rootElem = document.querySelector("#root")
render(<Routes/>, rootElem);
