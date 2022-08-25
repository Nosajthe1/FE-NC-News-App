import { useState, useEffect } from "react";
import { fetchComments, fetchArticleByID } from "../../api";
import { useParams } from "react-router-dom";

export default function ListOfComments() {
  const [allComments, setAllComments] = useState([]);
  const [articleTitle, setArticleTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

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
    <div>
      <h3>All Comments for:</h3>
      <h2 className="arcTitleForComms" >{articleTitle}</h2>
      <h2>
        
      {allComments.map((comment) => { 
          return (
            <div>
              {" "}
              <li className="listItem">
                <p>{comment.body}</p>
                <p>Likes: {comment.votes}</p>
                <p>Author: {comment.author}</p>
                <p>{comment.article_id}</p>
                <p>
                  Posted:{comment.created_at.split("T")[0]} at{" "}
                  {comment.created_at.split("T")[1].split(".")[0]}
                </p>
              </li>
            </div>
          );
        })}
      </h2>
    </div>
  );
}
