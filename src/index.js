import React from "react";
import { render } from "react-dom";

import "./index.css";

import GalleryApp from "./Components/GalleryApp/GalleryApp";

const App = () => <GalleryApp />;

render(<App />, document.getElementById("root"));
