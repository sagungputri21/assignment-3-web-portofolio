import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavLink extends Component {
  render() {
    return (
      <li className="mt-4">
        <Link to={this.props.routes}>
          <a
            className={`font-semibold flex items-center text-lg px-6 py-3 ml-2 mr-2 ${
              routes === id ? "text-yellow-500 bg-blue-800" : ""
            } hover:bg-blue-800 rounded-lg hover:text-white`}
          >
            <p className="ml-2">{this.props.text}</p>
          </a>
        </Link>
      </li>
    );
  }
}

export default NavLink;
