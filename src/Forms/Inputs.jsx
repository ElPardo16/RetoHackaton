import React from "react";
import './Form.css'

const Inputs = ({
  placeholder,
  type,
  name,
  id,
  value,
  setInputUserName,
  inputUserName,
}) => {
  const handleChange = ({ target: { name, value } }) => {
    setInputUserName({ ...inputUserName, [name]: value });
  };
  return (
    <input
      onChange={(e) => handleChange(e)}
      className="form-input"
      type={type}
      id={id}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Inputs;