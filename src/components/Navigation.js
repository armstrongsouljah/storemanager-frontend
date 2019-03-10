/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from "react";

const Navigation = (props) => (
    <nav>
        <div className="nav-wrapper black white-text">
            <a href="#" className="brand-logo">Dashboard</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#" onClick={props.onLogout} className="btn btn-small blue-grey white-text">Logout</a></li>
            </ul>
        </div>
    </nav>
);

export default Navigation;
