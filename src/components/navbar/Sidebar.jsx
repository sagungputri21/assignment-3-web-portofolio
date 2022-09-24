import React, { Component } from "react";
import NavLink from "./NavLink";

class SideBar extends Component {
  render() {
    return (
      <div className="w-64 h-full bg-blue-900">
        <ul className="font-Roboto text-gray-600 active:text-yellow-500 active:font-bold">
          <NavLink
            routes="/about"
            text="Home"
          />
          <NavLink
            routes="/experience"
            text="/education"
          />
          <NavLink
            routes="/skills"
            text="Status Vaksin"
          />
          <NavLink
            routes="/interest"
            text="Status Vaksin"
          />
          <NavLink
            routes="/awards"
            text="Status Vaksin"
          />
        </ul>
      </div>
    );
  }
}

export default SideBar;
