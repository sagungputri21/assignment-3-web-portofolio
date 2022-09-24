import React, { Component } from "react";

class ExperienceSection extends Component {
  render() {
    return (
      <div className="text-start mt-12">
        <div className="flex justify-between mx-auto">
          <h2 className="text-2xl font-black text-blue-900">
            {this.props.title}
          </h2>
          <p className="text-end font-semibold text-yellow-500 pt-3 w-56 right-0">
            {this.props.time}
          </p>
        </div>
        <p className="italic text-gray-700 text-[18px] mt-2">
          {this.props.role}
        </p>
        <p className="text-gray-500 mt-5 w-full">
          {this.props.desc}
        </p>
      </div>
    );
  }
}

export default ExperienceSection;
