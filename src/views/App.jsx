/* eslint-disable react/jsx-indent */
/* eslint-disable no-shadow */
import React, { Component, } from "react";
import { Redirect, } from "react-router-dom";
import { connect, } from "react-redux";
import LoginForm from "../components/loginForm";
import loginAction from "../actions/loginAction";

export class App extends Component {
    state = {
        username: "",
        password: "",
        redirect: false,
        loading: false,
    }

    componentWillReceiveProps(props) {
        this.handleIsAuthenticated(props.loginState);
    }

    handleIsAuthenticated = (loginState) => {
        if (loginState.token) {
            this.setState({ redirect: true, });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { loginAction, } = this.props;
        loginAction(this.state);
        this.setState({ loading: true, });
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value, });
        this.setState({ loading:false, })
    }

    handleLoading = () => {
        this.setState({ loading: true })
    }

    render() {
        const { redirect, loading,  } = this.state;
        const { errors, } = this.props.loginState;
        if (redirect) {
            return (
                <Redirect to="/dashboard" />
            );
        } return (
            <LoginForm onSubmit={this.handleSubmit} onChange={this.onChange} error={errors} onLoading={ loading} />
        );
    }
}

const mapStateToProps = state => ({
    loginState: state.loginReducer,
});

export default connect(mapStateToProps, { loginAction, })(App);
