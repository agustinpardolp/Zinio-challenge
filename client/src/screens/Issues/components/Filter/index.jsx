import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

import Input from "../../../../components/Input";

import { queryKeys } from './constants';
import { StyledFilterContainer } from '../../styled-components';

const Search = ({ handleInputChange }) => {
  const intl = useIntl();
  return (
    <StyledFilterContainer>
      <Input
        placeholder={`${intl.formatMessage({ id: 'input.search.placeholder' })}...`}
        variant="outlined"
        size="small"
        name="search"
        label={`${intl.formatMessage({ id: 'input.search.placeholder' })}...`}
        handleChange={handleInputChange}
        keyValue={queryKeys.sol}
        icon='search'
      />
    </StyledFilterContainer>
  )
}

export default Search;
Search.propTypes = {
  handleInputChange: PropTypes.func.isRequired,

};


