import React from "react";

export default function Input({ setState }) {
  return (
    <input
      className="bg-transparent text-xl mt-8 text-white border-none w-[484px] outline-none"
      onChange={(e) => setState(e.target.value)}
      placeholder="What's happening?"
    />
  );
}
