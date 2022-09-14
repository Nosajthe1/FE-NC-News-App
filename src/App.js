import "./App.css";
import Header from "./components/Header";
import Nav from "./components/navbar";
import ListOfArticles from "./components/Articles/articles";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import ArticleByID from "./components/Articles/singleArticle";
import ListOfComments from "./components/Comments/commentList";
import { useState } from "react";
import LogInPage from "./components/logInPage";
import { UserContext } from "./components/User.js";
import Error from "./components/errorMsg";

function App() {
  const { search } = useLocation();
  const [user, setUser] = useState([]);
  console.log(search);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          {typeof user === "string" ? (
            <p className="logInText">
              Logged in as: <mark>{user}</mark>
            </p>
          ) : (
            <div className="logInText">
              <Link to={"/login"}>Log in</Link>
            </div>
          )}
          <Header />
          <Nav />
          <Routes>
            <Route path="/login" element={<LogInPage />} />
            <Route path="/" element={<ListOfArticles />} />
            <Route
              path="/articles"
              element={<ListOfArticles search={search} />}
            />
            <Route path={`/articles${search}`} element={<ListOfArticles />} />
            <Route path="/articles/:article_id" element={<ArticleByID />} />
            <Route
              path="/articles/:article_id/comments"
              element={<ListOfComments />}
            />
            <Route path="*" element={<Error error={"404: Not Found"} />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
