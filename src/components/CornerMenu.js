import React from 'react';

const CornerMenu = (props) => (
    <div className="fixed-action-btn">
    <a className="btn-floating btn-large  teal darken-4">
        <i className="large material-icons">add</i>
    </a>
  <ul>
    <li><a onClick={props.onRegister} href="#" className="btn-floating red"><i className="material-icons">account_box</i></a></li>
  </ul>
</div>
);

export default CornerMenu;
