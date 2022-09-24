import React, { Component } from "react";
import "@fortawesome/free-brands-svg-icons";
import SectionTitle from "../components/title/SectionTitle";
import { experience } from "../data/experienceData";
import ExperienceSection from "../components/section/ExperienceSection";
class Experience extends Component {
  render() {
    return (
      <section id="experience" className="">
        <div className="flex">
          <div className="flex flex-col justify-start items-start">
            <SectionTitle text="Experience" />
            {/* experience 1 */}
            <ExperienceSection 
              title="Student Innovation Center (SIC) Udayana"
              time="January 2022 - Present"
              role="Frontend Developer"
              desc={"Get opportunity to design and develop Luxury Villas website. Techstack : SvelteKit, Prismic CMS, and Tailwind. Used Figma to design the User Interface"}
            />
            <ExperienceSection 
              title="Luxury Bali Rental"
              time="April 2022-June 2022"
              role="Freelance Web Developer"
              desc={"Contributed to SIC WEb 2.0 for developing user interface with data fetching from REST API. Develop use Nextjs and Chakra UI for styling. Work together with UI/UX Designer and Backend Developer"}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
