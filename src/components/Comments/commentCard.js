import { useContext } from "react";
import { UserContext } from "./../User.js";
import { useState, useEffect } from "react";
import { deleteComment } from "../../api";

export default function CommentCard ({
  allComments,
  setAllComments,
  setDeletedCommentMsg
}) {
  const { user } = useContext(UserContext);
  const [commentToDelete, setCommentToDelete] = useState("");
  const [existingComments, setExistingComments] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    deleteComment(commentToDelete).then(() => {
      setAllComments((currentComments) => {
        const copyCurrentComments = [...currentComments];
        currentComments.map((comment, index) => {
          if (commentToDelete === comment.comment_id) {
            copyCurrentComments.splice(index, 1);
            setAllComments(copyCurrentComments);
          }
        });
      });
      setDisabledButton(true);
      setDeletedCommentMsg(true);
    });
  }, [commentToDelete]);

  return (
    <ul className="Comments">
      {allComments.map(({ comment_id, body, author, votes, created_at }) => {
        return (
          <section className="Comment" key={comment_id}>
            <h4>
              <mark>{author}</mark> wrote:
            </h4>
            <li className="commentText" key={comment_id}>
              {body}
            </li>
            <p className="commentDate">date: {created_at.split("T")[0]}</p>
            <b className="commentVote">votes ({votes})</b>
            <div>
              {author === user ? (
                <button
                  className="deleteCommentBtn"
                  onClick={() => {
                    setCommentToDelete(comment_id);
                  }}
                >
                  delete
                </button>
              ) : null}
            </div>
          </section>
        );
      })}
    </ul>
  );
}
