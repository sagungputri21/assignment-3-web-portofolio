import React, { Component} from "react"

class Home extends Component {
    render() {
       return (
        <div>
          <section>
              <div className="">
                  <img src='/assets/gp.png' alt='photo-profile' className="w-60 h-64 p-2 border border-gray-300 shadow-md -rotate-3 mb-10 mx-auto"/>
                  <div className="text-black">
                    <h2 className="text-4xl font-semibold mb-5">Hello👋 Welcome to My Web Portofolio!</h2>
                    <p className="text-gray-600 p-1 text-xl">
                        I am <span className="text-blue-800 bg-slate-300 font-semibold p-0.5">Gung Putri </span>, 
                        a 3rd year computer science student at Udayana University. <br/>
                        I'm learning to develop skills in software development.
                    </p>
                  </div>
              </div>
                <br/>
          </section>
          {/* <About /> */}
        </div>
       )
    }   
}

export default Home;