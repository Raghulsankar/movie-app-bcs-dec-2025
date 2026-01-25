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
// }
export function Movie({ name, poster, rating, summary }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={name} />
      <div className="name-rating">
        <p className="movie-name">{name}</p>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
      <p className="movie-summary">{summary}</p>
    </div>
  );
}
