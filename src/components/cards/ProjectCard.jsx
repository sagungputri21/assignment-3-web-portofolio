import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    return (
      <div className="bg-white shadow-lg w-[19.5rem] h-[19.5rem] md:w-[358px] md:h-[361px] p-3 transition hover:scale-110 hover:ease-in-out duration-500 flex flex-col items-center mx-auto text-start rounded-lg">
          <div className="max-w-full w-full rounded-lg overflow-hidden">
            <img src={this.props.image} alt={this.props.alt}
                className="max-w-md md:object-fill w-full md:w-[334px] md:h-[245px] transition rounded-lg hover:scale-105 hover:ease-in duration-500"
            />
          </div>
          <div className="flex flex-col md:p-3 p-2 mt-1">
          <h1 className="text-lg text-start text-blue-800 font-semibold">
            {this.props.name}
          </h1>
          </div>
          <p className="p-2 text-gray-600 font-thin text-[14px] mb-3">
            {this.props.desc}
          </p>
      </div>
    );
  }
}

export default ProjectCard;
