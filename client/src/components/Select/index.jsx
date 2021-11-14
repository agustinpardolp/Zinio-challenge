import React from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";

import { StyledSelectContainer } from "./styled-components";

const Select = ({ options, handleChange, placeholder, width, name }) => {
  const intl = useIntl();
  return (
    <StyledSelectContainer width={width}>
      <select
        onChange={handleChange}
        defaultValue={options[0].value}
        placeholder={placeholder}
        aria-label={name}
        data-testid="select"
      >
        {options &&
          options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </StyledSelectContainer>
  );
};
Select.defaultProps = {
  width: "12vw",
  placeholder: "",
  options: PropTypes.arrayOf({ label: "", value: "", id: 0}),
};
Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  keyValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string,
};

export default Select;
