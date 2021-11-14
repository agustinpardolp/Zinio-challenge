import React from "react";
import PropTypes from "prop-types";
import { StyledTextArea } from "./styled-components";

const TextArea = ({
  label,
  placeholder,
  variant,
  size,
  handleChange,
  type = "text",
  keyValue,
  name,
  value,
  disabled,
}) => (
  <StyledTextArea
    id="standard-basic"
    label={label}
    placeholder={placeholder}
    variant={variant}
    size={size}
    onChange={(e) => handleChange(e, keyValue)}
    type={type}
    aria-label={name}
    data-testid="input"
    value={value}
    name={name}
    disabled={disabled}
  />
);

export default TextArea;

TextArea.defaultProps = {
  size: "small",
  label: "",
};
TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
