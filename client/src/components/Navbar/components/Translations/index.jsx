import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

import { StyledTitle, TranslateContainer } from "../../styled-components";

const Translations = ({ handleChangeLanguage }) => {
  return (
    <StyledTitle>
      <span>
        <FormattedMessage id="navbar.translate" />
      </span>
      <TranslateContainer>
        <i className="fas fa-language"></i>
        <ul>
          <li>
            <button
              value="en-us"
              type="button"
              onClick={handleChangeLanguage}
              data-testid="change-language"
            >
              <FormattedMessage id="navbar.english" />
            </button>
          </li>
          <li>
            <button value="en-es" type="button" onClick={handleChangeLanguage}>
              <FormattedMessage id="navbar.spanish" />
            </button>
          </li>
        </ul>
      </TranslateContainer>
    </StyledTitle>
  );
};

export default Translations;

Translations.propTypes = {
  handleChangeLanguage: PropTypes.func.isRequired,
};
