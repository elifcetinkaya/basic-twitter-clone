import React from "react";
import user from "../../assets/user.jpg";
import { ReactComponent as More } from "../../assets/more-logo.svg";

export default function User() {
  return (
    <div className="flex flex-row justify-between w-52 pb-20">
      <div className="flex flex-row">
        <div>
          <img className="w-14 h-14 rounded-full" src={user} />
        </div>
        <div className="ml-4">
          <div>User</div>
          <div>@username</div>
        </div>
      </div>
      <div>
        <More className="w-7 fill-white" />
      </div>
    </div>
  );
}
