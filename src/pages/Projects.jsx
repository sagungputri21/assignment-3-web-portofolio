import React, { Component } from "react";
import "@fortawesome/free-brands-svg-icons";
import SectionTitle from "../components/title/SectionTitle";
import ProjectCard from "../components/cards/ProjectCard";
import { hacktivProject } from "../data/projectData";

class Projects extends Component {
  render() {
    return (
      <section id="projects" className="">
        <div className="flex">
          <div className="flex flex-col justify-start items-start">
            <SectionTitle text="Projects" />
            <p className="italic font-semibold text-black">
              There are some projects that I have contributed to develop on
              Frontend :
            </p>
            <hr className="border border-1 border-gray-500 mt-2 mb-8"/>
            <div className="flex md:flex-row flex-col gap-8">
              {hacktivProject.map(data => (
                <ProjectCard 
                  name={data.name}
                  image={data.image}
                  alt={data.alt}
                  type={data.type}
                  desc={data.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
