import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, largeImageURL, onModalOpen }) => {
  function handleClick() {
    onModalOpen(largeImageURL);
  }

  return (
    <li className={styles.imageGalleryItem}>
      <img
        src={src}
        alt=""
        className={styles.imageGalleryItemImage}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  largeImageURL: PropTypes.string,
  onModalOpen: PropTypes.func,
};

export default ImageGalleryItem;
