import { NavLink } from "react-router-dom";
import BackIcon from "../assets/icons/BackIcon";

export function MenuElements({ setShowMenu }) {
  return (
    <div className="flex w-full h-full justify-end items-center">
      <div className="flex w-[50%] h-full justify-evenly items-center">
        <NavLink
          to="/"
          className="text-xl font-normal my-2"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/reviews"
          className="text-xl font-normal my-2"
        >
          Reviews
        </NavLink>
        <NavLink
          to="/stocks"
          className="text-xl font-normal my-2"
        >
          Stocks
        </NavLink>
        <NavLink
          to="/finance"
          className="text-xl font-normal my-2"
        >
          Financial Growth
        </NavLink>
        <NavLink
          to="/news"
          className="text-xl font-normal my-2"
        >
          News
        </NavLink>
      </div>
    </div>
  );
}
