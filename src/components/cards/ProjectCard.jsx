import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    return (
      <div className="w-80 h-fit shadow-md rounded-md">
        <div className="bg-white flex flex-col items-center mx-auto text-start rounded-lg p-3">
          <div className="rounded-lg w-72 h-48">
            <img src={this.props.image} alt={this.props.alt}
                className="w-full rounded-md h-48"
            />
          </div>
          <div className="flex flex-col justify-start items-start text-start mx-auto">
          <h1 className="text-xl text-blue-800 font-semibold flex items-start mt-5">
            {this.props.name}
          </h1>
          <p className="text-sm py-1 px-3 bg-blue-300 text-indigo-900 rounded-md mt-1 mb-3">
            {this.props.type}
          </p>
          </div>
          <p className="text-gray-600 font-thin text-[14px] mb-3">
            {this.props.desc}
          </p>

        </div>
      </div>
    );
  }
}

export default ProjectCard;
