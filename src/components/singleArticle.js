import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByID } from "../api";

export default function ArticleByID() {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleByID(parseInt(article_id))
      .then(({ articles }) => {
        setLoading(true);
        setArticle(articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>One moment please...</p>;
  }

  return (
    <>
      <ul className="list">
        <li className="listItem" key={article.article_id}>
          <p>{article.title}</p>, {article.topic}, {article.author},{" "}
          {article.body},{new Date(article.created_at).getFullYear()},{" "}
          {article.votes}, {article.comment_count}
        </li>
      </ul>
    </>
  );
}
