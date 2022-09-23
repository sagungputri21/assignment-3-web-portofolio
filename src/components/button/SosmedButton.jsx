import React, { Component } from "react";

class SosmedButton extends Component {
  render() {
    return (
      <div className="flex flex-row gap-1 mt-20 mb-10 -ml-16">
        <a href={this.props.link} target="_blank">
          <img src={this.props.imageURL} className="w-12 h-12"/>
        </a>
      </div>
    );
  }
}

export default SosmedButton;
