import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAllArticles } from "../api";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles(topic)
      .then((data) => {
        setLoading(true);
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topic]);

  if (isLoading) {
    return <p>One moment please...</p>;
  }

  return (
    <>
      <ul className="list">
        {articles.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <li className="listItem" key={article.article_id}>
                <p>{article.title}</p> {article.topic}, Author:{article.author},
                , Date:{new Date(article.created_at).getFullYear()}, Votes:
                {article.votes}, Comments:{article.comment_count}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
