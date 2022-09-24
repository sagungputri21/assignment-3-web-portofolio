import React, { Component } from "react";

class SosmedButton extends Component {
  render() {
    return (
      <div className="flex flex-row mb-10 -ml-16">
        <a href={this.props.link} target="_blank">
          <img src={this.props.imageURL} className="md:w-12 w-10 md:h-12"/>
        </a>
      </div>
    );
  }
}

export default SosmedButton;
