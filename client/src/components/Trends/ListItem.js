import React from "react";
import { ReactComponent as More } from "../../assets/more-logo.svg";

export default function ListItem() {
  return (
    <div className="flex flex-row justify-between pt-3 pb3 cursor-pointer">
      <div>
        <div className="text-[#8B98A5] text-sm">Trending in Turkey</div>
        <div className="text-white text-lg font-bold">Ezgi Mola</div>
        <div className="text-[#8B98A5] text-sm">11.8K Tweets</div>
      </div>
      <div>
        <More className="w-7 fill-white" />
      </div>
    </div>
  );
}
