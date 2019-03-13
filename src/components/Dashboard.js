/* eslint-disable react/jsx-indent */
import React from "react";

const renderProducts = (data) => {
    if (data.products) {
        return data.products.map(product => (
            <tr key={product.product_id}>
                <td className="uppercase-first">{product.product_name}</td>
                <td>{product.quantity}</td>
                <td className="right-align">{product.unit_cost}</td>
            </tr>
        ));
    }
};
const Dashboard = props => (
    <div className="col s12 white">
        <h4 className="center">Product Listing</h4>
        <table className="responsive-table striped">
            <thead>
                <tr className="blue darken-1 white-text">
                    <th><h5>Product Name</h5></th>
                    <th><h5>Quantity</h5></th>
                    <th className="right-align"><h5>Unit Cost</h5></th>
                </tr>
            </thead>
            <tbody>
                {renderProducts(props)}
            </tbody>
        </table>
    </div>
);

export default Dashboard;
