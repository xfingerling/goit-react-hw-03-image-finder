import React, { Component, createRef } from "react";
import PropTypes from "prop-types";

import styles from "./ImageGallery.module.css";

import PixabayAPI from "../../api/PixabayAPI";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  static propTypes = {
    imgs: PropTypes.array,
    onModalOpen: PropTypes.func,
  };

  listRef = createRef();

  componentDidUpdate(prevProps) {
    const { current } = this.listRef;

    if (current && prevProps.imgs !== this.props.imgs) {
      const scrollToElem =
        PixabayAPI.page * PixabayAPI.perPage - PixabayAPI.perPage;

      current.children[scrollToElem].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  render() {
    const { imgs, onModalOpen } = this.props;
    const listItem = imgs.map((el) => (
      <ImageGalleryItem
        key={el.id}
        src={el.webformatURL}
        largeImageURL={el.largeImageURL}
        onModalOpen={onModalOpen}
      />
    ));

    return (
      <ul ref={this.listRef} className={styles.imageGallery}>
        {listItem}
      </ul>
    );
  }
}

export default ImageGallery;
