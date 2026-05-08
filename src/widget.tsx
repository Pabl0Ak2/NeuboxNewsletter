import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/widget.css";
import reactToWebComponent from "react-to-webcomponent";

import { NewsletterWidget } from "./components/NewsletterWidget";

const WebComponent = reactToWebComponent(
  NewsletterWidget,
  React,
  ReactDOM,
 
);

customElements.define(
  "newsletter-widget",
  WebComponent
);