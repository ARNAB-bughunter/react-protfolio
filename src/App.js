import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar/>
      <Home/>
      <hr style={{ color:"rgba(34,197,94)" }} />
      <About/>
      <hr style={{ color:"rgba(34,197,94)" }} />
      <Skills/>
      <hr style={{ color:"rgba(34,197,94)" }} />
      <Education/>
      <hr style={{ color:"rgba(34,197,94)" }} />
      <Work/>
      <hr style={{ color:"rgba(34,197,94)" }} />
      <Contact/>
      <Footer/>

      
    </div>
  );
}

export default App;
