import './styles/App.css';
import React from "react"
import { AboutMe } from "./AboutMe"
import { NavBar } from "./NavBar"

function App() {
  const nextSection = React.useRef();
  const goTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", })
  }

  return (

    <div>
      <NavBar />
      <AboutMe goTo={() => goTo(nextSection)} />

      <div ref={nextSection}><AboutMe /></div>
    </div>
  );
}

export default App;