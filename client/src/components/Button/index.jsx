import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled-components";
import { handleVariant } from "./constants";

const Button = ({
  onClick,
  label,
  value,
  fontColor,
  variant,
  width,
  disabled,
}) => {

  const buttonSetup = handleVariant(variant);
  return (
    <StyledButton
      borderColor={buttonSetup.borderColor}
      fontColor={fontColor}
      onClick={() => onClick(value)}
      width={width}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  fontColor: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.string
};

export default Button;
