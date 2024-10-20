import { useState } from "react";
import { MenuElements } from "../components/MenuElements";
import MobileIcon from "../assets/icons/MobileIcon";

export function NavBar() {

  return (
    <div className="w-full h-[100px] border-2 border-black">
      <div className="w-full h-full flex justify-between items-center">
          <h1 className="text-5xl font-extrabold m-3">SOLOS</h1>
            <div className="relative w-full h-full animate-slideIn z-30">
              <MenuElements
                onClickInvisibleFn={() => {
                  setShowMenu(false);
                }}
              />
            </div>
      </div>
    </div>
  );
}


