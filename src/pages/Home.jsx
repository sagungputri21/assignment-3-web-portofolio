import React, { Component} from "react"
import About from "./About";
import Experience from "./Experience";
import Interest from "./Interest";
import Projects from "./Projects";
import Skills from "./Skills";
class Home extends Component {
    render() {
       return (
        <div className="max-w-[1280px]">
          <section>
              <div className="flex flex-col items-center my-auto mt-10">
                  <img src='/assets/gp.png' alt='photo-profile' className="md:w-[225px] md:h-64 w-[200px] h-56 p-2 border border-gray-300 shadow-md -rotate-3 mb-10 mx-auto hover:scale-105"/>
                  <div className="text-black">
                    <h2 className="text-4xl font-semibold mb-5">Hello👋 Welcome to My Web Portofolio!</h2>
                    <p className="text-gray-600 p-1 md:text-xl text-lg">
                        I am <span className="text-blue-800 bg-slate-300 font-semibold p-0.5">Gung Putri </span>, 
                        a 3rd year computer science student at Udayana University. <br/>
                        I'm learning to develop skills in software development.
                    </p>
                  </div>
              </div>
          </section>
          <About />
          <Experience />
          <Interest />
          <Projects />
          <Skills />
        </div>
       )
    }   
}

export default Home;