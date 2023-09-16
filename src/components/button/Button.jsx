import React from 'react';
import PropTypes from 'prop-types';

import { LoadMoreButton } from '../component-style/button.styled';

export const Button = ({ onClick }) => {
  const handleLoadMore = () => {
    onClick(1);
  };

  return (
    <LoadMoreButton
      type="button"
      onClick={handleLoadMore}
      aria-label="load more button"
    >
      Load more
    </LoadMoreButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
