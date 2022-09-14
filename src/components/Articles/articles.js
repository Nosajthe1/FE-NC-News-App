
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from "./articleCard";
import { fetchAllArticles } from "../../api";
import SortBy from "./sortBy";
import Error from "../errorMsg";

export default function ListOfArticles({ search, user }) {
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [existingError, setExistingError] = useState("");

  useEffect(() => {
    fetchAllArticles(search)
      .then(({ articles }) => {
        setFetchedArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setExistingError(error.response.data);
      });
  }, [search]);

  if (existingError) return <Error error={"404: Not Found"} />;
  if (isLoading) return <p>...loading</p>;
  return (
    <div>
      <SortBy search={search} setFetchedArticles={setFetchedArticles} />
      <main className="ListOfArticles">
        {fetchedArticles.map(
          ({ article_id, title, author, created_at, comment_count, votes }) => {
            return (
              <ArticleCard
                key={article_id}
                article_id={article_id}
                title={title}
                author={author}
                created_at={created_at}
                comment_count={comment_count}
                votes={votes}
              />
            );
          }
        )}
      </main>
    </div>
  );
}