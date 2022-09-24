import React, { Component } from "react";

class SectionTitle extends Component {
  render() {
    return (
      <div className="flex flex-row gap-1 mt-20 mb-10 -ml-16">
        <hr className="border-2 border-blue-800 md:w-16 w-14 flex items-center my-auto" />
        <p className="text-lg text-blue-800 font-semibold bg-blue-200 p-2 px-3">
        {this.props.text}
        </p>
      </div>
    );
  }
}

export default SectionTitle;
