import React, { Component } from "react";
import { render } from "react-dom";

import "./index.css";

import GalleryApp from "./Components/GalleryApp/GalleryApp.jsx";

class App extends Component {
  render() {
    return <GalleryApp />;
  }
}

render(<App />, document.getElementById("root"));
