import React from "react";

const TextInput = props => (
    <div className="input-field">
        <input id={props.id} type={props.type} className="validate" onChange={props.onChange} />
        <label htmlFor={props.id}>{props.labelText}</label>
  </div>
);

export default TextInput;
