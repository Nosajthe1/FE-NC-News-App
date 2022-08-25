import "./App.css";
import Articles from "./components/articles";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import { useState } from "react";
import Header from "./components/Header";
import ArticleByID from "./components/singleArticle";
import ListOfComments from "./components/Comments/commentList";

function App() {
  return (
    <div className="App">
      <a href="/">
        {" "}
        <h1 id="title">NC News</h1>{" "}
      </a>

      <NavBar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/:topic" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleByID />} />
        <Route
          path="/articles/:article_id/comments"
          element={<ListOfComments />}
        />
      </Routes>
    </div>
  );
}

export default App;
