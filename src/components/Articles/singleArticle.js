import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchArticleByID } from "../../api";
import Votes from "../updateVotes";
import Error from "../errorMsg";
import ListOfComments from "../Comments/commentList";




export default function ArticleByID() {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [existingError, setExistingError] = useState("");
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleByID(parseInt(article_id))
      .then(({ articles }) => {
        setLoading(true);
        setArticle(articles);
        setLoading(false);
      })
      .catch((err) => {
        setExistingError(err.response.data);
      });
  }, [article_id]);

  if (existingError) return <Error error={"404: Not Found"} />;
  if (isLoading) {
    return <p>One moment please...</p>;
  }

  return (
    <>
      <div className="singleArticle">
        <h2> {article.title}</h2>
        <h3>by {article.author}</h3>
        <h4>
          Posted on {article.created_at.split("T")[0]} at{" "}
          {article.created_at.split("T")[1].split(".")[0]}
        </h4>
        <p className="articleBody">{article.body}</p>
        <Votes article_id={article_id} votes={article.votes} />
        <h5>Comments({article.comment_count})</h5>
        <button className="viewAllCommentsBts">
          <Link
            className="CommentsButtons"
            to={`/articles/${article_id}/comments`}
          >
            View all comments here
          </Link>
        </button>
      </div>
    </>
  );
}
