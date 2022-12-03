import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";

export default function CreateTweet() {
  const [text, setText] = useState("");

  const saveTweet = () => {
    axios
      .post("http://localhost:8080/tweet/create-tweet", {
        tweet: text,
      })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <Input setState={setText} />
      <Button event={saveTweet} />
    </div>
  );
}
