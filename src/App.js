import './App.css';
import React from "react"
import { AboutMe } from "./AboutMe"

function App() {
  const nextSection = React.useRef();
  const goTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", })
  }

  return (
    
    <div>
      <AboutMe goTo = {() => goTo(nextSection)}/>

      <div ref={nextSection}><AboutMe /></div>
    </div>
  );
}

export default App;
