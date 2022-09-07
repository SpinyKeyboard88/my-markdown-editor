import React, { Component } from "react";
import "./App.css";
import "./DarkApp.css";

import { marked } from "marked";

import logo from "./logo.svg";

import { sampleText } from "./sampleText";

class App extends Component {
  state = {
    text: sampleText,
  };

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  };

  renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return __html;
  };

  componentDidUpdate() {
    const { text } = this.setState;
    localStorage.setItem("text", text);
  }

  componentDidMount() {
    const text = localStorage.getItem("text");
    if (text) {
      this.setState({ text });
    } else {
      this.setState({ text: sampleText });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              onChange={this.handleChange}
              value={this.state.text}
              className="form-control"
              rows="35"
            />
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
