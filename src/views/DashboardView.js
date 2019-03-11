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
import CornerMenu from "../components/CornerMenu";
import UserAddView from "./UserAddView";



export class DashboardView extends Component {
    state = {
      redirect: false,
      open: false,
      loading:true, 
    }
    componentWillMount() {
      const { getProducts, } = this.props;
      getProducts();
    }

    handleLogout = (event) => {
      event.preventDefault();
      const token = localStorage.getItem("token");
      if(token){
       if(confirm("Are you sure you want to logout?")){
        localStorage.clear()
        this.setState({ redirect: true, })
       }
      }
    }
    onCloseModal = () => {
      this.setState({ open: false})
    }

    showRegisterForm = (event) => {
      event.preventDefault();
      this.setState({ open: true });
    }

    render() {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("userRole");
        const { products, } = this.props;
        const {redirect, open, loading, } = this.state;

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
            {
              role === 'admin' ? 
              <CornerMenu onRegister={this.showRegisterForm} />:''
            }
            <UserAddView open={open} onClose={this.onCloseModal} />
          </div>

        );
    }
}

const mapStateToProps = state => ({
    products: state.productListReducer.products,

});


export default connect(mapStateToProps, { getProducts, })(DashboardView);
