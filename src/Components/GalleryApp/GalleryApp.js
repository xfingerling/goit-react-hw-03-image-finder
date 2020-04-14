import React, { Component } from "react";

import styles from "./GalleryApp.module.css";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import PixabayAPI from "../../api/PixabayAPI";

class GalleryApp extends Component {
  state = {
    query: "",
    imgs: [],
    modalIsOpen: false,
    largeImageURL: "",
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, imgs } = this.state;

    if (prevState.query !== query) {
      PixabayAPI.resetPage();

      this.setState({ isLoading: true });

      PixabayAPI.fetchImg(query)
        .then(({ hits }) => this.setState({ imgs: hits }))
        .catch((err) => console.error(err))
        .finally(() => this.setState({ isLoading: false }));
    }

    if (prevState.imgs !== imgs) {
      // window.scrollTo({
      //   top: document.documentElement.scrollHeight,
      //   behavior: "smooth",
      // });
    }
  }

  handleLoadMore = () => {
    const { query } = this.state;
    PixabayAPI.incrementPage();

    PixabayAPI.fetchImg(query).then(({ hits }) =>
      this.setState((state) => ({ imgs: [...state.imgs, ...hits] })),
    );
  };

  handleQueryChange = (e) => {
    e.preventDefault();

    this.setState({ query: e.target.query.value });
    e.target.query.value = "";
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
        {imgs.length > 0 && (
          <ImageGallery imgs={imgs} onModalOpen={this.handleModalOpen} />
        )}
        {imgs.length > 0 && <Button onLoadMore={this.handleLoadMore} />}
        {modalIsOpen && (
          <Modal
            largeImageURL={largeImageURL}
            onModalClose={this.handleModalClose}
          />
        )}
        {isLoading && (
          <Loader type="ThreeDots" color="#3f51b5" height={100} width={100} />
        )}
      </div>
    );
  }
}

export default GalleryApp;
