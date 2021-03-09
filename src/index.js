import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail animeCharacter="Itachi" ninjaTime="Today at 10:00AM" meetingTopic="Susanoo" fakePhoto={faker.image.image()}/>
      <CommentDetail animeCharacter="Kakashi" ninjaTime="Today at 10:30AM" meetingTopic="Kamui" fakePhoto={faker.image.image()}/>
      <CommentDetail animeCharacter="Obito" ninjaTime="Today at 11:00AM" meetingTopic="Rin" fakePhoto={faker.image.image()}/>
      <CommentDetail animeCharacter="Minato" ninjaTime="Today at 11:30AM" meetingTopic="FTG" fakePhoto={faker.image.image()}/>
      <CommentDetail animeCharacter="Pain" ninjaTime="Today at 12:00PM" meetingTopic="Rinnegan" fakePhoto={faker.image.image()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));