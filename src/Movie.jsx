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
import Button from "@mui/material/Button";

// }
export function Movie({ name, poster, rating, summary, onDelete, id }) {
  const [show, setShow] = useState(true);

  //  const [hide,setHide] = useState(true);
  return (
    <div className="movie-card">
      <img src={poster} alt={name} />
      {/* <div className="name-rating"> */}
      <p className="movie-name">{name}</p>
      <p className="movie-rating">⭐ {rating}</p>
      {/* </div> */}
      <Button variant="contained" onClick={() => setShow(!show)}>
        Toggle Summary
      </Button>
      {/* <button >Toggle summary</button> */}
      {show ? <p className="movie-summary">{summary}</p> : null}
      <Counter needProgress={false} />

      <Button
        variant="contained"
        color="error"
        onClick={() => {
          // if (window.confirm("Delete this movie?")) {
          //   onDelete(id);
          // }
          onDelete(id);
        }}
      >
        🗑 Delete
      </Button>

      {/* <Button variant="contained" onClick={() => setHide(!hide)}>Delete</Button>
      {hide ? <p className="movie-summary">{summary}</p> : null} */}
    </div>
  );
}

