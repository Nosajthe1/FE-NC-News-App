import { patchVotes } from "../api.js";
import { useState } from "react";

export default function Votes({ article_id, votes }) {
  const [voteChanges, setVoteChanges] = useState(0);

  const handleLike = (event) => {
    setVoteChanges((currentVotes) => currentVotes + 1);
    patchVotes(article_id, 1).catch((err) => {
      setVoteChanges((currentVotes) => currentVotes - 1);
    });
  };

  const handleDislike = (event) => {
    setVoteChanges((currentVotes) => currentVotes - 1);
    patchVotes(article_id, -1).catch((err) => {
      setVoteChanges((currentVotes) => currentVotes + 1);
    });
  };

  return (
    <>
      <h5>Was this a good read?({votes + voteChanges})</h5>
      <button
        className="voteButtons"
        onClick={handleLike}
        disabled={voteChanges > 0}
      >
        👍
      </button>
      <button
        className="voteButtons"
        onClick={handleDislike}
        disabled={voteChanges < 0}
      >
        👎
      </button>
    </>
  );
}
