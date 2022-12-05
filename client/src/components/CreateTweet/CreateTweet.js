import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import user from "../../assets/user.jpg";

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
    <div className="w-[682px] flex flex-col mx-auto pt-16">
      <div className="flex flex-row">
        <div>
          <img className="w-14 h-14 rounded-full" src={user} />
        </div>
        <div>
          <div className="ml-2">
            <button className="w-[106px] h-6 rounded-xl border-slate-500 border-2 text-[#1D9BF0] flex items-center text-center justify-center">
              Everyone
            </button>
          </div>
          <div className="ml-2">
            <Input setState={setText} />
          </div>
          <Button event={saveTweet} />
        </div>
      </div>
    </div>
  );
}
