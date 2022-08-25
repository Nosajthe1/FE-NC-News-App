import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../api";
import Articles from "./articles";

export default function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics()
      .then(({ topics }) => {
        setTopics(topics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {topics.map((eachtopic) => {
        return (
          <Link to={`${eachtopic.slug} `} key={eachtopic.slug}>
            <button value={eachtopic.slug}>{eachtopic.slug}</button>
          </Link>
        );
      })}
    </>
  );
}
