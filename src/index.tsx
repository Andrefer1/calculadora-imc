import * as React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/Header";
import App from "./App";
import { Footer } from "./components/Footer";

import "./styles/global.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
  rootElement
);
