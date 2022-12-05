import React from "react";
import Searchbar from "./Searchbar";
import List from "./List";
import Follow from "./Follow";

export default function Trends() {
  return (
    <div className="border-l-2 border-gray-600 h-screen pl-5">
      <Searchbar />
      <List />
      <Follow />
    </div>
  );
}
