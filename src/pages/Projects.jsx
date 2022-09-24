import React, { Component } from "react";
import "@fortawesome/free-brands-svg-icons";
import SectionTitle from "../components/title/SectionTitle";
import ProjectCard from "../components/cards/ProjectCard";

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
            <div className="flex flex-wrap gap-8">
              <ProjectCard 
                name="Project 1"
                image="https://source.unsplash.com/1600x900/?website"
                alt="project 1 image"
                type="website"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptates debitis non nihil eligendi, illo id, maiores impedit voluptatem beatae ad nesciunt dignissimos?"
              />
              <ProjectCard 
                name="Project 2"
                image="https://source.unsplash.com/1600x900/?website"
                alt="project 1 image"
                type="website"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptates debitis non nihil eligendi, illo id, maiores impedit voluptatem beatae ad nesciunt dignissimos?"
              />
              <ProjectCard 
                name="Project 3"
                image="https://source.unsplash.com/1600x900/?website"
                alt="project 1 image"
                type="website"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptates debitis non nihil eligendi, illo id, maiores impedit voluptatem beatae ad nesciunt dignissimos?"
              />
              <ProjectCard 
                name="Project 4"
                image="https://source.unsplash.com/1600x900/?website"
                alt="project 1 image"
                type="website"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptates debitis non nihil eligendi, illo id, maiores impedit voluptatem beatae ad nesciunt dignissimos?"
              />
              <ProjectCard 
                name="Project 5"
                image="https://source.unsplash.com/1600x900/?website"
                alt="project 1 image"
                type="website"
                desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus voluptates debitis non nihil eligendi, illo id, maiores impedit voluptatem beatae ad nesciunt dignissimos?"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
