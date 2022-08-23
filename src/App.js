import "./App.css";
import Articles from "./components/articles";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home"
import NavBar from "./components/navbar";
import { useState } from "react";
import Header from "./components/Header"

function App() {
// const [topic, setTopic] = useState("");

  return (
    <div className="App">
     <a href='/' > <h1>NC News</h1> </a> 

      <NavBar  /> 
      <Routes>
        <Route path='/' element={< Articles />}/> 
        <Route path='/:topic' element={<Articles/>}/>
      </Routes>
    </div>
  );
}

export default App;
