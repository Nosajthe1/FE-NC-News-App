
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTopics } from "../api.js";

export default function Nav() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="Nav">
      <div className="links">
        <Link className="navLinks" to="/">
          home
        </Link>
        {topics.map(({ slug }, index) => {
          return (
            <Link
              className="navLinks"
              to={`articles?topic=${slug}`}
              key={index}
            >
              {slug}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
