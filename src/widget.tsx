import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/widget.css";
import reactToWebComponent from "react-to-webcomponent";

import { NewsletterWidget } from "./components/NewsletterWidget";

console.log(
  "Ejecutando Web Component reusable"
);

const WebComponent = reactToWebComponent(
  NewsletterWidget,
  React,
  ReactDOM,
 {
    props: ["apiUrl", "source", "theme"] 
  }
);

customElements.define(
  "newsletter-widget",
  WebComponent
);