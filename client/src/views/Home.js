import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import CreateTweet from "../components/CreateTweet/CreateTweet";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-[195px]">
        <Sidebar />
      </div>
      <div className="mx-auto w-12">
        <CreateTweet />
      </div>
    </div>
  );
}
