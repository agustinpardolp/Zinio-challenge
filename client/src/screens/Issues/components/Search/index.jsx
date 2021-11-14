import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import Input from "../../../../components/Input";
import { StyledSearchContainer } from '../../styled-components';

const Search = ({ handleChange }) => {
  const intl = useIntl();
  return (
    <StyledSearchContainer>
      <Input
        placeholder={`${intl.formatMessage({ id: 'input.search.placeholder' })}...`}
        variant="outlined"
        size="small"
        name="search"
        label={`${intl.formatMessage({ id: 'input.search.placeholder' })}...`}
        handleChange={handleChange}
        icon='search'
      />
    </StyledSearchContainer>
  )
}

export default Search;
Search.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};


