import React from "react";
import { ReactComponent as Media } from "../../assets/media.svg";
import { ReactComponent as Gif } from "../../assets/gif.svg";
import { ReactComponent as Poll } from "../../assets/poll.svg";
import { ReactComponent as Emoji } from "../../assets/emoji.svg";

export default function Button({ event }) {
  return (
    <div className="flex flex-row justify-between border-gray-500 border-t-2 pt-3 mt-5">
      <div className="flex flex-row">
        <button>
          <Media className="w-5 fill-[#1D9BF0]" />
        </button>
        <button>
          <Gif className="w-5 fill-[#1D9BF0] ml-3" />
        </button>
        <button>
          <Poll className="w-5 fill-[#1D9BF0] ml-3" />
        </button>
        <button>
          <Emoji className="w-5 fill-[#1D9BF0] ml-3" />
        </button>
      </div>
      <button
        className="bg-[#1D9BF0] w-24 h-8 rounded-3xl text-sm text-white"
        onClick={event}
      >
        Tweet
      </button>
    </div>
  );
}
