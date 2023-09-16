import React from 'react';
import PropTypes from 'prop-types';
import {
  GalleryItem,
  GalleryItemImg,
} from '../component-style/imgGallery.styled';

export default function ImageGaleryItem({ webformatURL, largeImageURL, tags }) {
  return (
    <GalleryItem>
      <GalleryItemImg
        src={webformatURL}
        alt={tags}
        width="100px"
        data-large={largeImageURL}
        loading="lazy"
      />
    </GalleryItem>
  );
}

ImageGaleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
