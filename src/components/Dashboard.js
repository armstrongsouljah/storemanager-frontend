/* eslint-disable react/jsx-indent */
import React from "react";

const renderProducts = (data) => {
    if (data.products) {
        return data.products.map(product => (
            <tr key={product.product_id}>
                <td>{product.product_name}</td>
                <td>{product.quantity}</td>
                <td>{product.unit_cost}</td>
            </tr>
        ));
    }
};
const Dashboard = props => (
    <div className="col s12  blue lighten-5">
        <h6 className="center">Product Listing</h6>
        <table className="responsive-table centered">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Cost</th>
                </tr>
            </thead>
            <tbody>
                {renderProducts(props)}
            </tbody>
        </table>
    </div>
);

export default Dashboard;
