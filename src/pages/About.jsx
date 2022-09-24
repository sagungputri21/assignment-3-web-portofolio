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
            <h2 className="md:text-5xl text-4xl font-black text-blue-800 text-start">SAGUNG PUTRI NARISWARI</h2>
            <div className="contact flex gap-3 md:text-md text-sm mt-2 text-black">
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
            <p className="text-gray-700 mt-5 underline underline-offset-4">Connect with me :</p>
            <div className="flex gap-16 ml-16 mt-5">
              <div>
                <SosmedButton 
                    link="https://www.linkedin.com/in/sagungputrinrswari/" 
                    imageURL="/public/icons/linkedin_logo.png" 
                />
              </div>
              <div>
                <SosmedButton 
                    link="https://github.com/sagungputri21" 
                    imageURL="/public/icons/github_logo.png" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
