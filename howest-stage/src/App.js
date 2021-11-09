import logo from './logo.svg';
import './App.css';
import  Home  from './components/Home'
import { Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from "react";
import About from "./components/About";

function App() {
  return (
    <div className={"App"}>
      <h1>Dit is de root</h1>
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"about"} element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
