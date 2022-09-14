import { useState, useEffect } from "react";
import { fetchComments, fetchArticleByID } from "../../api";
import { useParams } from "react-router-dom";
import AddComment from "./addComment";
import CommentCard from "./commentCard";

export default function ListOfComments() {
  const [allComments, setAllComments] = useState([]);
  const [articleTitle, setArticleTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [deletedCommentMsg, setDeletedCommentMsg] = useState(false);

  useEffect(() => {
    fetchComments(article_id).then(({ comments }) => {
      setAllComments(comments);
      setIsLoading(false);
    }) 
    fetchArticleByID(article_id).then(( {articles} ) => {
      console.log(articles);
        setArticleTitle(articles.title);
    });
  }, [article_id]);


  if (isLoading) return <p>One moment please...</p>;
  return (
    <div className="CommentCard">
      <h3>All Comments for:</h3>
      <h2 className="CommentsCardHeader">{articleTitle}</h2>
      <AddComment
        article_id={article_id}
        setAllComments={setAllComments}
        deletedCommentMsg={deletedCommentMsg}
      />
      <CommentCard
        allComments={allComments}
        setAllComments={setAllComments}
        deletedCommentMsg={deletedCommentMsg}
        setDeletedCommentMsg={setDeletedCommentMsg}
      />
    </div>
  );
}
