import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Context } from '../LenguageWrapper';
import {
  StyledNavbar,
  StyledNavbarContainer,
  StyledTitle,
} from './styled-components';
import Translations from './components/Translations';

const Navbar = () => {
  const context = useContext(Context);
  const handleChangeLanguage = (e) => {
    context.changeLanguage(e);
  };
  return (
    <StyledNavbar position="static">
      <StyledNavbarContainer>
        <StyledTitle>
          <h2>
            <FormattedMessage id="navbar.title" />
          </h2>
          <i className="fas fa-columns"></i>
        </StyledTitle>
        <Translations handleChangeLanguage={handleChangeLanguage} />
      </StyledNavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
