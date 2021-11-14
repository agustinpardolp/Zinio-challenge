import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styled-components";

const Button = ({
  onClick,
  label,
  value,
  fontColor,
  variant,
  width,
  disabled,
}) => {
  const handleVariant = (variant) => {
    let settings = {
      borderColor: "var(--emerald)",
    };
    switch (variant) {
      case "confirm":
        settings = {
          borderColor: "var(--emerald)",
        };
        break;
      case "cancel":
        settings = {
          borderColor: "var(--cardinal)",
        };
        break;
      case "disabled":
        settings = {
          borderColor: "var(--silver)",
        };
        break;
      default:
        return settings;
    }

    return settings;
  };
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
