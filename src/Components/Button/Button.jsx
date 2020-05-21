import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ onLoadMore }) => (
  <button className={styles.button} onClick={onLoadMore}>
    Load More
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
