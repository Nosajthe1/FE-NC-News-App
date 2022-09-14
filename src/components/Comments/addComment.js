import { useState, useEffect } from "react";
import { postComment } from "./../../api.js";

export default function AddComment({
  article_id,
  setAllComments,
  deletedCommentMsg,
}) {
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [correctMsg, setCorrectMsg] = useState(false);
  const [failMsg, setFailMsg] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, body, username)
      .then(({ createdComment }) => {
        setCorrectMsg(true);
        setAllComments((currentComments) => {
          return [createdComment, ...currentComments];
        });
        setBody("");
        setUsername("");
      })
      .catch((err) => {
        setCorrectMsg(false);
        setFailMsg(true);
        setBody("");
        setUsername("");
      });
  };

  return (
    <div className="postCommentForm">
      <form className="postComment" onSubmit={handleSubmit}>
        <div>
          {" "}
          {deletedCommentMsg === true ? (
            <p className="sPostCommentMsg">
              Your comment has been deleted!
            </p>
          ) : correctMsg === true ? (
            <p className="correctPostCommentMsg">
              Your comment has been posted!
            </p>
          ) : failMsg === true ? (
            <p className="failPostCommentMsg">
              Invalid username and/or missing comment body
            </p>
          ) : null}{" "}
        </div>
        <label>
          <p>Post comment:</p>
          <input
            className="postCommentTxt"
            type="text"
            placeholder="comment..."
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></input>
          <br></br>
          <input
            className="postCommentUsername"
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
          <button
            className="submit-btn"
            type="submit"
            disabled={correctMsg === true}
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
