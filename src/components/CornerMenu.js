import React from 'react';

const CornerMenu = (props) => (
    <div className="fixed-action-btn">
    <a onClick={props.onRegister} className="btn-floating btn-large  teal darken-4">
        <i className="large material-icons">add</i>
    </a>
</div>
);

export default CornerMenu;
