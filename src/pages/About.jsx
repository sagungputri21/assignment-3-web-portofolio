import React, { Component } from "react";
import "@fortawesome/free-brands-svg-icons";
import SectionTitle from "../components/title/SectionTitle";
import SosmedButton from "../components/button/SosmedButton";
import { sosmed } from "../data/sosmedData";

class About extends Component {
  render() {
    // console.log(sosmed);
    return (
      <section id="about" className="">
        <div className="flex">
          <div className="flex flex-col justify-start items-start">
            <SectionTitle text="About Me"/>
            <h2 className="text-5xl font-black text-blue-800">SAGUNG PUTRI NARISWARI</h2>
            <div className="contact flex gap-3 text-md mt-2 text-black">
              <p className="italic font-semibold text-black">Junior Frontend Developer </p> {' '} |
              <p className="text-gray-500">+62-81239328521</p>
              <p className="text-blue-600">sagungputri1530@gmail.com</p>
            </div>
            <p className="mt-12 max-w-screen-xl text-gray-600 text-start">
              I am a computer science student in Udayana University. 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ea quaerat placeat incidunt beatae in officia repellat sunt ad! Culpa alias accusantium officia voluptatem laudantium laborum molestias. 
              Quibusdam et placeat doloribus.
            </p>
            <div className="flex gap-5">
              {sosmed.map(({link, image}) => {
                <SosmedButton 
                  link={link}
                  imageURL={image}
                />
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
