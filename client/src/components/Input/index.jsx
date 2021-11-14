import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styled-components";

const Input = ({
  placeholder,
  handleChange,
  type = "text",
  name,
  width,
  height,
  value,
  defaultValue,
  disabled,
  label,
  icon
}) => (

  <StyledInput
    id="standard-basic"
    placeholder={placeholder}
    onChange={handleChange}
    type={type}
    aria-label={name}
    name={name}
    data-testid="input"
    width={width}
    height={height}
    value={value}
    defaultValue={defaultValue}
    disabled={disabled}
    label={label}
    icon={icon}
  />

);

export default Input;

Input.defaultProps = {
  size: "small",
  label: "",
};
Input.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  keyValue: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.string
};
