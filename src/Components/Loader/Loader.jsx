import React from "react";

import styles from "./Loader.module.css";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const MyLoader = () => (
  <div className={styles.wrapperLoader}>
    <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
  </div>
);

export default MyLoader;
