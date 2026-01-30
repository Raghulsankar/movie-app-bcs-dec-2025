// export function Movie({ name, poster, rating, summary }) {
//   return (
//     <div>
//       <img src={poster} />
//       <h2>{name}</h2>
//       <p>
//         ⭐<span>{rating}</span>
//       </p>
//       <p>{summary}</p>
//     </div>
//   );

import { useState } from "react";
import { Counter } from "./Counter";

// }
export function Movie({ name, poster, rating, summary }) {
  const [show, setShow] = useState(true);

  return (
    <div className="movie-card">
      <img src={poster} alt={name} />
      {/* <div className="name-rating"> */}
      <p className="movie-name">{name}</p>
      <p className="movie-rating">⭐ {rating}</p>
      {/* </div> */}
      <button onClick={() => setShow(!show)}>Toggle summary</button>
      {show ? <p className="movie-summary">{summary}</p> : null}
      <Counter needProgress={false} />
    </div>
  );
}
