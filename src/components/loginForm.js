/* eslint-disable react/jsx-indent */
import React from "react";
import TextInput from "./TextInput";

const LoginForm = props => (
    <div className="row">
        <div className="col s12 m4 offset-m4 offset-l4 l4">
            <div className="card-panel medium login-container">
                <h4 className="center">Store Manager</h4>
                {
                    props.onLoading ?
                    <div className="progress blue">
                      <div className="indeterminate"></div>
                    </div>
                    :
                    ''
                }
                <form className="form login-form section card-content" onSubmit={props.onSubmit}>
                    <TextInput id="username" type="text" labelText="Username" onChange={props.onChange} />
                    <TextInput id="password" type="password" labelText="Password" onChange={props.onChange} />
                    <button className="btn cyan darken-4" type="submit" name="action">
Login
                        <i className="material-icons right">send</i>
                    </button>
                    <p className="red-text">{props.error}</p>
                </form>
            </div>
        </div>
    </div>
);

export default LoginForm;
