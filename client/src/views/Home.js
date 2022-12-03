import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-[195px]">
        <Sidebar />
      </div>
    </div>
  );
}
