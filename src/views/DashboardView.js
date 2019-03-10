/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable indent */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, } from "react";
import { Redirect, } from "react-router-dom";
import { connect, } from "react-redux";

import Dashboard from "../components/Dashboard";
import Navigation from "../components/Navigation";
import getProducts from "../actions/getProducts";


export class DashboardView extends Component {
    state = {
      redirect: false,
    }
    componentWillMount() {
      const { getProducts, } = this.props;
      getProducts();
    }

    handleLogout = (event) => {
      event.preventDefault();
      console.log("logggngngngngn")
      const token = localStorage.getItem("token");
      if(token){
       if(confirm("Are you sure you want to logout?")){
        localStorage.clear()
        this.setState({ redirect: true, })
       }
      }
    }

    render() {
        const token = localStorage.getItem("token");
        const { products, } = this.props;
        const {redirect} = this.state;

        if (!token) {
            return (
              <Redirect to="/" />
            );
        }
        if(redirect){
          return (
            <Redirect to="/" />
          );
        }
        return (
          <div>
            <Navigation onLogout={this.handleLogout}/>
            <div className="row">
              <Dashboard products={products} />
            </div>

          </div>

        );
    }
}

const mapStateToProps = state => ({
    products: state.productListReducer.products,
});


export default connect(mapStateToProps, { getProducts, })(DashboardView);
