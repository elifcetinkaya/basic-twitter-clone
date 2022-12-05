import React from "react";
import { ReactComponent as Logo } from "../../assets/tw-logo.svg";
import { ReactComponent as Home } from "../../assets/home-logo.svg";
import { ReactComponent as Explore } from "../../assets/explore-logo.svg";
import { ReactComponent as Com } from "../../assets/com-logo.svg";
import { ReactComponent as Not } from "../../assets/not-logo.svg";
import { ReactComponent as Message } from "../../assets/msg-logo.svg";
import { ReactComponent as Mark } from "../../assets/mark-logo.svg";
import { ReactComponent as Profile } from "../../assets/profile-logo.svg";
import { ReactComponent as More } from "../../assets/more-logo.svg";

import SidebarItem from "./SidebarItem";
import Button from "./Button";
import User from "./User";

export default function Sidebar() {
  return (
    <div className="w-275 flex items-start flex-col justify-between h-screen text-white mt-6 border-r-2 border-gray-600">
      <div>
        <div className="pl-5">
          <Logo className="w-8 fill-white" />
        </div>
        <div className="mt-6">
          <SidebarItem Logo={Home} text="Home" />
          <SidebarItem Logo={Explore} text="Explore" />
          <SidebarItem Logo={Com} text="Communities" />
          <SidebarItem Logo={Not} text="Notifications" />
          <SidebarItem Logo={Message} text="Messages" />
          <SidebarItem Logo={Mark} text="Bookmarks" />
          <SidebarItem Logo={Profile} text="Profile" />
          <SidebarItem Logo={More} text="More" />
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div>
        <User />
      </div>
    </div>
  );
}
