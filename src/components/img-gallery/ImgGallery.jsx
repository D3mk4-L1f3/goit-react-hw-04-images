import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ImageGaleryItem from '../img-item/GalleryItem';
import { Modal } from 'components/modal/Modal';
import { ImageGalleryConatiner } from '../component-style/imgGallery.styled';

export const ImageGallery = ({ photosArr }) => {
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tags, setTags] = useState('');

  const handleModalOpen = e => {
    const largeImageURL = e.target.dataset.large;
    const tags = e.target.alt;

    if (!largeImageURL || !tags) {
      return;
    }

    setLargeImageURL(largeImageURL);
    setTags(tags);
    setIsModalOpen(true);
  };

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <ImageGalleryConatiner onClick={handleModalOpen}>
        {photosArr.map(({ webformatURL, largeImageURL, tags }, index) => (
          <ImageGaleryItem
            key={`${webformatURL}_${index}`}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}

        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          isModalOpen={isModalOpen}
          onCloseModal={handleModalClose}
        />
      </ImageGalleryConatiner>
    </>
  );
};

ImageGallery.propTypes = {
  photosArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
