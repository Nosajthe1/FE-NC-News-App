import "./App.css";
import Articles from "./components/articles";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
    <div className="App">
     <a href='/' > <h1>NC News</h1> </a> 

      <Routes>
        <Route path='/' element={< Articles />}/> 
      </Routes>
    </div>
  );
}

export default App;
