import { useState } from "react";
import "./index.css";
import { Movie } from "./Movie";
import { Userlist } from "./Userlist";
import { Route, Routes, Link } from "react-router";
// import { ColorGame } from "./App6";
import { User } from "./User";

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/movies" element={<MovieList />} />
      </Routes>
      {/* <MovieList /> */}
    </div>
  );
}

function MovieList() {
  const [movieList, setMovieList] = useState([
    {
      name: "Border 2",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00401449-yvzgkbpdca-portrait.jpg",
      rating: 7.5,
      summary: "A massive war drama sequel set during the 1971 Indo-Pak war.",
    },
  ]);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating: Number(rating),
      summary,
    };

    setMovieList([newMovie, ...movieList]);

    setName("");
    setPoster("");
    setRating("");
    setSummary("");
  };

  return (
    <div className="App">
      {/* <nav>
        <Link to="/colorgame">ColorGame</Link> | <Link to="/movie">Movie</Link>{" "}
        |<Link to="/userlist">Userlist</Link>
      </nav>

      <Routes>
        <Route path="/colorgame" element={<ColorGame />} />
        <Route path="/movie" element={<movieList />} />
        <Route path="Userlist" element={<Userlist />} />
      </Routes> */}

      {/* 🔹 ADD MOVIE FORM */}
      <div className="add-movie-form">
        <input
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />

        <input
          placeholder="Rating"
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <input
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <button onClick={addMovie}>➕ Add Movie</button>
      </div>

      {movieList.map(({ name, poster, rating, summary }, index) => (
        <Movie
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
        />
      ))}
    </div>
  );
}
