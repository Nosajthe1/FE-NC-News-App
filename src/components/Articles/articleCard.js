import { Link } from "react-router-dom";
import ListOfComments from "../Comments/commentList";

export default function ArticleCard({
  article_id,
  title,
  author,
  created_at,
  comment_count,
  votes,
}) {
  return (
    <div className="ArticleCard">
      <section className="cardText">
        <h2>{title}</h2>
        <h3>by {author}</h3>
        <h4>Posted on {created_at.split("T")[0]}</h4>
        <Link className="viewAllBtn" to={`/articles/${article_id}`}>
          view article
        </Link>
        <h5>Likes({votes})</h5>
        <h5>Comments({comment_count})</h5>
        <button className="viewAllCommentsBts">
          <Link
            className="CommentsButtons"
            to={`/articles/${article_id}/comments`}
          >
            view all
          </Link>
        </button>
      </section>
    </div>
  );
}
