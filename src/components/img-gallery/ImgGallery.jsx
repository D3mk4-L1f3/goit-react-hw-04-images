import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGaleryItem from '../img-item/GalleryItem';
import Modal from 'components/modal/Modal';
import { ImageGalleryConatiner } from '../component-style/imgGallery.styled';

export class ImageGallery extends Component {
  state = {
    largeImageURL: '',
    isModalOpen: false,
  };

  handleModalOpen = e => {
    const largeImageURL = e.target.dataset.large;
    const tags = e.target.alt;

    if (!largeImageURL || !tags) {
      return;
    }

    this.setState({ largeImageURL, tags, isModalOpen: true });
  };

  hendleModalClose = () => this.setState({ isModalOpen: false });
  render() {
    const { largeImageURL, isModalOpen, tags } = this.state;
    return (
      <>
        <ImageGalleryConatiner onClick={this.handleModalOpen}>
          {this.props.photosArr.map(({ webformatURL, largeImageURL, tags }) => (
            <ImageGaleryItem
              key={webformatURL}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          ))}
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            isModalOpen={isModalOpen}
            onCloseModal={this.hendleModalClose}
          />
        </ImageGalleryConatiner>
      </>
    );
  }
}

ImageGallery.propTypes = {
  photosArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
