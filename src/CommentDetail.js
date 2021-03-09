import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
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
  );
};

export default CommentDetail;