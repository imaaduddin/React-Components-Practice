import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div classname="content">
          <a href="/" classname="author">
            Sasuke
          </a>
          <div classname="metadata">
            <span classname="date">Today at 11:30pm</span>
          </div>
          <div classname="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div classname="content">
          <a href="/" classname="author">
            Sasuke
          </a>
          <div classname="metadata">
            <span classname="date">Today at 11:30pm</span>
          </div>
          <div classname="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.image()} />
        </a>
        <div classname="content">
          <a href="/" classname="author">
            Sasuke
          </a>
          <div classname="metadata">
            <span classname="date">Today at 11:30pm</span>
          </div>
          <div classname="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));