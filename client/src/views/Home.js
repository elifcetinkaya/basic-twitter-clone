import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import CreateTweet from "../components/CreateTweet/CreateTweet";
import Trends from "../components/Trends/Trends";

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="fixed top-0 left-[15%] bottom-0">
        <Sidebar />
      </div>
      <div className="mx-auto w-auto">
        <CreateTweet />
      </div>
      <div className="fixed top-0 right-[15%] bottom-0">
        <Trends />
      </div>
    </div>
  );
}
