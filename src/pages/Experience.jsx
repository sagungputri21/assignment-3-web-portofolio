import React, { Component } from "react";
import "@fortawesome/free-brands-svg-icons";
import SectionTitle from "../components/title/SectionTitle";
import { experience } from "../data/experienceData";
import ExperienceSection from "../components/section/ExperienceSection";
class Experience extends Component {
  render() {
    return (
      <section id="experience" className="">
        <SectionTitle text="Experience" />
        <div className="flex">
          <div className="flex flex-col justify-start items-start">
            {experience.map((data) => (
              <ExperienceSection
                title={data.title}
                time={data.time}
                role={data.role}
                desc={data.desc}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
