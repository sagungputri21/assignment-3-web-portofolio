import React, { Component } from "react";
import "@fortawesome/free-brands-svg-icons";
import SectionTitle from "../components/title/SectionTitle";
import SosmedButton from "../components/button/SosmedButton";
import { sosmed } from "../data/sosmedData";

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="">
        <div className="flex">
          <div className="flex flex-col justify-start items-start">
            <SectionTitle text="Skills"/>
            <div className="bg-white border border-dashed border-gray-400 p-8">
            <ul className="grid grid-cols-2 text-blue-800 gap-x-10 gap-y-2">
              <li>Computer Science</li>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>SvelteKit</li>
              <li>C Programming</li>
              <li>Python</li>
              <li>Self Learning</li>
            </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
