import React, { Component } from "react";
import NavLink from "./NavLink";
import { Link } from 'react-router-dom'

class SideBar extends Component {
  render() {
    return (
      <div className="h-screen max-h-full top-0 left-0">
      <div className="w-64 h-full bg-blue-900">
        <ul className="text-gray-600 active:text-yellow-500 active:font-bold">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/interest">Interest</Link>
          </li>
          <li>
          <Link to="/projects">Projects</Link>
          </li>
          {/* <NavLink
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
          /> */}
        </ul>
      </div>
      </div>
    );
  }
}

export default SideBar;
