import React, { useState } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import PropTypes from 'prop-types';
import {
  SearcherWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from '../component-style/searcher.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [lastSearchedQuery, setLastSearchedQuery] = useState('');

  const handleInputChange = e => {
    const { value } = e.target;
    setSearchQuery(value);
    setIsSubmitButtonDisabled(
      value.trim() === '' || value === lastSearchedQuery
    );
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (searchQuery.trim() === '' || searchQuery === lastSearchedQuery) {
      return;
    }
    await onSubmit(searchQuery);
    setLastSearchedQuery(searchQuery);
  };

  return (
    <SearcherWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton
          type="submit"
          disabled={isSubmitButtonDisabled}
          className="button"
          aria-label="search button"
          style={{ color: isSubmitButtonDisabled ? 'red' : 'green' }}
        >
          <TfiSearch style={{ width: '25', height: '25' }} />
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="searcher"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="...try to search here)"
          area-label="searcher input"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </SearchForm>
    </SearcherWrapper>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
