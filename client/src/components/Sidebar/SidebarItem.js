import React from "react";

export default function SidebarItem({ Logo, text }) {
  return (
    <div className="flex flex-row h-12 hover:bg-slate-500 rounded-3xl p-5 text-xl cursor-pointer items-center">
      <div>
        <Logo className="w-7 fill-white" />
      </div>
      <div className="ml-4">{text}</div>
    </div>
  );
}
