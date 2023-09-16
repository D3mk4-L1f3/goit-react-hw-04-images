/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from './loader/Loader';
import { Searchbar } from './searcher/Searcher';
import { ImageGallery } from './img-gallery/ImgGallery';
import { Button } from './button/Button';
import { getPhoto } from '../api/PixabayApi';
import { MainApp } from './component-style/app.styled';

export const App = () => {
  const [photosArr, setPhotosArr] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [orientation, setOrientation] = useState('horizontal');

  const updateOrientation = () => {
    window.innerWidth <= 555
      ? setOrientation('vertical')
      : setOrientation('horizontal');
  };

  useEffect(() => {
    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    return () => {
      window.removeEventListener('resize', updateOrientation);
      setPhotosArr([]);
    };
  }, [orientation]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.trim() === '') {
        return;
      }

      try {
        setStatus('pending');
        const getPhotoResponse = await getPhoto(searchQuery, page, orientation);
        const nextPagePhotosArr = getPhotoResponse.hits;

        if (nextPagePhotosArr.length === 0) {
          toast.error('No results found!');
          setStatus('error');
          return;
        }

        const loadMoreBtnStatus =
          page < Math.ceil(getPhotoResponse.totalHits / 12);

        if (!loadMoreBtnStatus) {
          toast.info(
            `We're sorry, but you've reached the end of search results`
          );
        }

        setPhotosArr(prevPhotosArr => [...prevPhotosArr, ...nextPagePhotosArr]);
        setStatus('resolved');
        setShowLoadMoreBtn(loadMoreBtnStatus);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setStatus('idle');
          toast.info(
            `We're sorry, but you've reached the end of search results`
          );
        }
      }
    };

    if (searchQuery.trim() !== '' || page !== 1) {
      fetchData();
    }
  }, [searchQuery, page, orientation]);

  const handleSubmit = searchQuery => {
    if (searchQuery.trim() === '') {
      return;
    }
    setSearchQuery(searchQuery);
    setStatus('pending');
    setPhotosArr([]);
    setPage(1);
    setShowLoadMoreBtn(true);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <MainApp>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery photosArr={photosArr} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && showLoadMoreBtn && (
        <Button onClick={onLoadMore} />
      )}
      <ToastContainer autoClose={3000} />
    </MainApp>
  );
};
