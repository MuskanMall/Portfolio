import NavBar from "./componenets/NavBar";
import Hero from "./componenets/Hero";
import Technologies from "./componenets/Technologies";
import Experience from "./componenets/Experience";
import Projects from "./componenets/Projects";
import Education from "./componenets/Education";
import Contacts from "./componenets/Contacts";
import React from "react";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection: by-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <NavBar />
        <Hero />
        <Technologies />
        <Experience />
        <Projects />
        <Education />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
