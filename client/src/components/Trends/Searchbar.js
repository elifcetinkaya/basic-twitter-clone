import React from "react";
import { ReactComponent as Search } from "../../assets/search.svg";

export default function Searchbar() {
  return (
    <div>
      <label htmlFor="search" className="relative">
        <Search className="w-[42px] fill-[#8B98A5] absolute mt-3 pl-5" />
        <input
          className="w-[348px] h-[42px] bg-[#1E2732] rounded-3xl mt-1 outline-none text-white pl-16"
          placeholder="Search Twitter"
          id="search"
        />
      </label>
    </div>
  );
}
