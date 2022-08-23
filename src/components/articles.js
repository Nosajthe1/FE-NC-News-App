import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles()
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => { 
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul className="list">
        {articles.map((article) => {
          return (
            <li className="listItem" key={article.article_id}>
              <p>{article.title}</p>, {article.topic}, {article.author},{" "}
              {article.body},{new Date(article.created_at).getFullYear()},{" "}
              {article.votes}, {article.comment_count}
            </li>
          );
        })}
      </ul>
    </>
  );
}
