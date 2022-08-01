import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home"
import About from "./views/About"
import Projects from "./views/Projects"

function App() {
  return(
    <div>
      <h1>Mi página web</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects/1">Projects</Link>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects/:project_id" element={<Projects />}/>
      </Routes>
      <footer>Soy el footer</footer>
    </div>
  )


}

export default App;
