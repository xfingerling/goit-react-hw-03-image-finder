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
  src: PropTypes.string.isRequired,
  onModalOpen: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
