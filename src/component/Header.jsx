import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full flex justify-center border-b-2 px-4">
      <div className="max-w-[1200px] w-full flex justify-between self-center">
        <div className="">
          <h1 className="py-4">APP LOGO</h1>
        </div>
        <div className="">
          <ul className="flex gap-8">
            <li className="py-4">
              <NavLink to={"/"}>DASHBOARD</NavLink>
            </li>
            <li className="py-4">
              <NavLink to={"/create-ad"}>CREATE ADS</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
