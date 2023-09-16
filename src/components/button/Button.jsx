import { Component } from 'react';
import PropTypes from 'prop-types';

import { LoadMoreButton } from '../component-style/button.styled';

export class Button extends Component {
  hendleLoadMore = () => {
    this.props.onClick(1);
  };

  render() {
    return (
      <LoadMoreButton
        type="button"
        onClick={this.hendleLoadMore}
        aria-label="load more button"
      >
        Load more
      </LoadMoreButton>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
