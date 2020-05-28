import React, { Component } from "react";

import styles from "./GalleryApp.module.css";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";

import PixabayAPI from "../../api/PixabayAPI";

class GalleryApp extends Component {
  state = {
    query: "",
    imgs: [],
    modalIsOpen: false,
    largeImageURL: "",
    isLoading: false,
  };

  fetchImg = (query) => {
    PixabayAPI.fetchImg(query)
      .then(({ hits }) => this.setState({ imgs: hits }))
      .catch((err) => console.error(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  // componentDidMount() {
  //   const { query } = this.state;

  //   this.setState({ isLoading: true });
  //   this.fetchImg(query);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      PixabayAPI.resetPage();

      this.setState({ isLoading: true });
      this.fetchImg(query);
    }
  }

  handleLoadMore = () => {
    const { query } = this.state;
    PixabayAPI.incrementPage();

    this.setState({ isLoading: true });

    PixabayAPI.fetchImg(query)
      .then(({ hits }) =>
        this.setState((state) => ({ imgs: [...state.imgs, ...hits] })),
      )
      .catch((err) => console.error(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleQueryChange = (e) => {
    e.preventDefault();

    const formInput = e.target.query;

    this.setState({ query: formInput.value });
    formInput.value = "";
  };

  handleModalOpen = (src) => {
    this.setState({ modalIsOpen: true, largeImageURL: src });
  };

  handleModalClose = () => {
    this.setState({ modalIsOpen: false, largeImageURL: "" });
  };

  render() {
    const { imgs, modalIsOpen, largeImageURL, isLoading } = this.state;

    return (
      <div className={styles.galleryApp}>
        <Searchbar onSubmit={this.handleQueryChange} />

        {!!imgs.length && (
          <ImageGallery imgs={imgs} onModalOpen={this.handleModalOpen} />
        )}

        {!!imgs.length && <Button onLoadMore={this.handleLoadMore} />}
        {modalIsOpen && (
          <Modal
            largeImageURL={largeImageURL}
            onModalClose={this.handleModalClose}
          />
        )}

        {isLoading && <Loader />}
      </div>
    );
  }
}

export default GalleryApp;
