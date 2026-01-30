import { useState } from "react";

export function Counter({ needProgress }) {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      {/* Event Listener - click event - camelCase */}

      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setDisLike(dislike + 1);
        }}
      >
        👎 {dislike}
      </button>

      {/* progress = like/like+dislike*100 */}
      {needProgress && (
        <div className="counter-like-dislike">
          <label for="progress-bar">Uploading Document</label>
          <progress
            id="progress-bar"
            value={like}
            max={like + dislike}
          ></progress>
          <p>
            {like === 0 && dislike === 0
              ? ""
              : like - dislike > 10
                ? "You are awesome 🚀"
                : "You are fun 😜"}
          </p>
        </div>
      )}
    </div>
  );
}
