import React, { Component } from "react";
import "./App.css";

import marked from "marked";
import logo from "./logo.svg";

import { sampleText } from "../sampleText";

class App extends Component {
  state = {
    text: sampleText,
  };

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ sampleText });
  };
}

function render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea className="form-control" rows="35" />
          // we will write our text here
        </div>
        <div className="col-sm-6">
          <textarea className="form-control" rows="35" />
          // we will render our text here
        </div>
      </div>
    </div>
  );
}

export default render;
