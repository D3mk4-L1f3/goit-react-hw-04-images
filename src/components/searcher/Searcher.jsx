import { Component } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import PropTypes from 'prop-types';

import {
  SearchbarConatiner,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from '../component-style/searcher.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
    isSubmitButtonDisabled: true,
  };

  heandleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
  };

  heandleSearchInputChange = e => {
    const { value } = e.target;

    this.setState({
      searchQuery: value,
      isSubmitButtonDisabled: false,
    });

    if (value.trim() === '') {
      this.setState({
        isSubmitButtonDisabled: true,
      });
    }
  };

  render() {
    const { searchQuery, isSubmitButtonDisabled } = this.state;

    return (
      <SearchbarConatiner>
        <SearchForm onSubmit={this.heandleSubmit}>
          <SearchFormButton
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="button"
            aria-label="search button"
          >
            <TfiSearch style={{ color: 'black', width: '20', height: '20' }} />
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
            onChange={this.heandleSearchInputChange}
          />
        </SearchForm>
      </SearchbarConatiner>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
