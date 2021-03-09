import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail animeCharacter="Itachi"/>
      <CommentDetail animeCharacter="Kakashi"/>
      <CommentDetail animeCharacter="Obito"/>
      <CommentDetail animeCharacter="Minato"/>
      <CommentDetail animeCharacter="Pain"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));