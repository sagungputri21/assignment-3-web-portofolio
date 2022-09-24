import React, { Component } from "react";
import SectionTitle from "../components/title/SectionTitle";

class Interest extends Component {
  render() {
    return (
      <section id="interest" className="">
        <div className="flex">
          <div className="flex flex-col justify-start items-start">
            <SectionTitle text="Interest"/>
            <h2 className="text-3xl font-black text-blue-800 text-start">
                MY <span className="text-gray-500">INTEREST</span>
            </h2>
            <p className="mt-6 max-w-screen-xl text-gray-600 text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ea quaerat placeat incidunt beatae in officia repellat sunt ad! Culpa alias accusantium officia voluptatem laudantium laborum molestias. 
              Quibusdam et placeat doloribus.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum corporis animi distinctio, 
              alias aperiam obcaecati ad dicta nesciunt repellendus nulla aspernatur possimus est quam repudiandae veniam. 
              Quidem nostrum debitis placeat?
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Interest;
