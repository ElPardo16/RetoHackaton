import React from "react";
import './Form.css'

const Inputs = ({ placeholder, type, id, value,setInputUserName,inputUserName }) => {
  return (
    <input
    onChange={(e) => {
      setInputUserName((inputUserName = e.target.value));
    }}
      className="form-input"
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Inputs;
