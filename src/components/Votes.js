import { patchVotes } from "../api";
import { useState } from "react";

export default function Likes({ article_id, votes }) {
  const [likesChanges, setLikesChanges] = useState(0);

  const handleLike = (event) => {
    setLikesChanges((currentLikes) => currentLikes + 1);
    patchVotes(article_id, 1).catch((err) => {
      setLikesChanges((currentLikes) => currentLikes - 1);
    });
  };

  const handleDislike = (event) => {
    setLikesChanges((currentLikes) => currentLikes - 1);
    patchVotes(article_id, -1).catch((err) => {
      setLikesChanges((currentLikes) => currentLikes + 1);
    });
  };

  return (
    <>
      <h5>Likes({votes + likesChanges})</h5>
      <button
        className="likesButtons"
        onClick={handleLike}
        disabled={likesChanges > 0}
      >
        👍
      </button>
      <button
        className="likesButtons"
        onClick={handleDislike}
        disabled={likesChanges < 0}
      >
        👎
      </button>
    </>
  );
}
