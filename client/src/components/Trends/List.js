import React from "react";
import ListItem from "./ListItem";

export default function List() {
  return (
    <div className="mt-4 w-[348px] h-[880px] bg-[#1E2732] rounded-3xl p-3">
      <div className="text-white text-xl font-bold">Trends for you</div>
      <div className="mt-4">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}
