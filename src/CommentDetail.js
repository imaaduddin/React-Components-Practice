import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.fakePhoto} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.animeCharacter}
        </a>
        <div className="metadata">
          <span className="date">{props.ninjaTime}</span>
        </div>
        <div className="text">{props.meetingTopic}</div>
      </div>
    </div>
  );
};

export default CommentDetail;