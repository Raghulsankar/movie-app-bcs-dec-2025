import { useState } from "react";
import "./index.css";

export default function App() {
  // const names = ["Vikas", "Dhanpal", "Rahul", "Rishi", "Robin"];

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// Hook - Variable - React tracks
// Hooks - useState, useEffect, useContext, useMemo
// Hooks are function

function Counter() {
  // React does not track below variable ❌
  // let like = 10;

  // Array Destructing
  //const [state, setState] = useState(Initial_Value)
  // setState (updates) -> state
  // React - tracks - Hook variable ✅
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      {/* Event Listener - click event - camelCase */}

      <button
        onClick={() => {
          // like++;
          // console.log(like);
          // setLike(1000);
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
      {/* <h1>{like}</h1>
      <h1>{dislike}</h1> */}

      {/* progress = like/like+dislike*100 */}

      <label for="progress-bar">Uploading Document</label>
      <progress id="progress-bar" value={like} max={like + dislike}></progress>
    </div>
  );
}
