import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, onModalOpen, alt }) => (
  <li className={styles.imageGalleryItem}>
    <img
      src={src}
      alt={alt}
      className={styles.imageGalleryItemImage}
      onClick={onModalOpen}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  onModalOpen: PropTypes.func,
  alt: PropTypes.string,
};

export default ImageGalleryItem;
