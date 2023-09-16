import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from './loader/Loader';
import { Searchbar } from './searcher/Searcher';
import { ImageGallery } from './img-gallery/ImgGallery';
import { Button } from './button/Button';
import { getPhoto } from '../api/PixabayApi';
import { MainApp } from './component-style/app.styled';

export class App extends Component {
  state = {
    photosArr: [],
    page: 1,
    searchQuery: '',
    status: 'idle',
    showLoadMoreBtn: true,
  };

  async componentDidUpdate(_, prevState) {
    const currentQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const currentPage = prevState.page;
    const nextPage = this.state.page;

    if (currentQuery !== nextQuery || currentPage !== nextPage) {
      try {
        this.setState({ status: 'pending', showLoadMoreBtn: true });
        const getPhotoResponse = await getPhoto(nextQuery, nextPage);
        const nextPagePhotosArr = getPhotoResponse.hits;

        if (nextPagePhotosArr.length === 0) {
          toast.error('No results found!');
          this.setState({ status: 'error' });
          return;
        }

        const loadMoreBtnStatus =
          this.state.page < Math.ceil(getPhotoResponse.totalHits / 12);

        if (!loadMoreBtnStatus) {
          toast.info(
            `We're sorry, but you've reached the end of search results`
          );
        }

        this.setState(prevState => {
          return {
            photosArr: [...prevState.photosArr, ...nextPagePhotosArr],
            status: 'resolved',
            showLoadMoreBtn: loadMoreBtnStatus,
          };
        });
      } catch (error) {
        if (error.response.status === 400) {
          this.setState({ status: 'idle' });
          toast.info(
            `We're sorry, but you've reached the end of search results`
          );
        }
      }
    }

    if (
      prevState.photosArr.length > 0 &&
      prevState.searchQuery === this.state.searchQuery
    ) {
      window.scrollBy({
        top: 200 * 2,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = async searchQuery => {
    if (searchQuery.trim() === '') {
      return;
    }
    this.setState({ searchQuery, status: 'pending', photosArr: [], page: 1 });
  };

  onLoandMore = step => {
    this.setState(prevState => {
      return {
        page: prevState.page + step,
      };
    });
  };

  getModalData = url => {
    console.log(url);
    if (url) {
      this.setState({ largeImageURL: url });
    }
  };

  render() {
    const { photosArr, status, showLoadMoreBtn } = this.state;

    return (
      <MainApp>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery photosArr={photosArr} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && showLoadMoreBtn && (
          <Button onClick={this.onLoandMore} />
        )}
        <ToastContainer autoClose={3000} />
      </MainApp>
    );
  }
}
