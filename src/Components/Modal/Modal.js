import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string,
    onModalClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.code !== "Escape") return;

    this.props.onModalClose();
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget !== e.target) return;

    this.props.onModalClose();
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
