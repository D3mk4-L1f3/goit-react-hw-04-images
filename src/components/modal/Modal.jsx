import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import { customStyles } from '../component-style/modal.styled';

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

ReactModal.setAppElement('#root');

export default function Modal({
  isModalOpen,
  onCloseModal,
  largeImageURL,
  tags,
}) {
  useEffect(() => {
    isModalOpen ? disableBodyScroll(document.body) : clearAllBodyScrollLocks();
  }, [isModalOpen]);

  return (
    <>
      <ReactModal
        style={customStyles}
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
      >
        <img src={largeImageURL} alt={tags} width="800px" />
      </ReactModal>
    </>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
