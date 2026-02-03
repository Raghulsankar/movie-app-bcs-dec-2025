import "./index.css";
import { Userlist } from "./Userlist";
import { Route, Routes, Link, useParams, Navigate } from "react-router";
// import { ColorGame } from "./App6";
import { User } from "./User";
import ColorGame, { ColorBox } from "./ColorBox";
import { MovieList } from "./MovieList";
import { useState } from "react";
import { Home } from "./Home";
import { Error } from "./Error";

export default function App() {
  const [movieList, setMovieList] = useState([
    // useEffect(() => {
    //   fetch("https://6971d21f32c6bacb12c49d92.mockapi.io/movies")
    //     .then((res) => res.json())
    //     .then((movie) => setMovieList(movie));
    // },[]);
    {
      id: "1",
      name: "Border 2",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00401449-yvzgkbpdca-portrait.jpg",
      rating: 7.5,
      summary:
        "A massive war drama sequel set during the 1971 Indo-Pak war. Sunny Deol returns as Major Kuldip Singh Chandpuri to lead a new battalion in a high-stakes battle for sovereignty, featuring intense tank warfare and patriotic sacrifice.",
    },
    {
      id: "2",
      name: "Thalaivar Thambi Thalaimaiyil",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00481251-htxqsrdcwb-portrait.jpg",
      rating: 8.8,
      summary:
        "A chaotic comedy-drama starring Jiiva as a Panchayat President who gets trapped in a dilemma when a death occurs in one house and a wedding in the neighbor's house simultaneously, forcing him to manage the mayhem.",
    },
    {
      id: "3",
      name: "Dhurandhar",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00452447-smmrnuhqrx-portrait.jpg",
      rating: 7.0,
      summary:
        "An espionage thriller featuring Ranveer Singh as Hamza, an undercover Indian intelligence agent who embeds himself deep within the Karachi mafia to dismantle terror operations from the inside.",
    },
    {
      id: "4",
      name: "Hot Spot 2 Much",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00482307-akyreartuz-portrait.jpg",
      rating: 7.2,
      summary:
        "A bold anthology sequel that satirizes modern morality. The film weaves together stories about relationships, hypocrisy, and social stigmas, centered around a filmmaker pitching controversial scripts to a producer.",
    },
    {
      id: "5",
      name: "Ikkis",
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ikkis-et00388415-1765283297.jpg",
      rating: 8.7,
      summary:
        "A biographical war drama directed by Sriram Raghavan, telling the untold story of Second Lieutenant Arun Khetarpal, the youngest recipient of the Param Vir Chakra, who fought bravely in the 1971 war.",
    },
    {
      id: "6",
      name: "Draupathi 2",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00481466-fkumcpefau-portrait.jpg",
      rating: 6.5,
      summary:
        "A social drama that shifts between the modern day and the 14th century. It follows a man entangled in a land dispute who discovers a historical connection to a Hoysala commander protecting his kingdom from invaders.",
    },
    {
      id: "7",
      name: "Rahu Ketu",
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rahu-ketu-et00462933-1768457264.jpg",
      rating: 8.0,
      summary:
        "A fantasy comedy where two unlucky characters from a writer's story, Rahu and Ketu (played by Varun Sharma and Pulkit Samrat), magically come to life and create cosmic chaos in the real world.",
    },
    {
      id: "8",
      name: "Parasakthi",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00431398-kmxrrdfpbu-portrait.jpg",
      rating: 5.0,
      summary:
        "Set in the 1960s, this period drama starring Sivakarthikeyan focuses on the anti-Hindi imposition agitation in Tamil Nadu, following two brothers on opposite sides of the law during a turbulent political movement.",
    },
    {
      id: "9",
      name: "Happy Patel: Khatarnak Jasoos",
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/happy-patel-khatarnak-jasoos-et00473816-1766394630.jpg",
      rating: 6.0,
      summary:
        "A spy-comedy featuring Vir Das as Happy Patel, a ballet-dancing, sandwich-making misfit who is unexpectedly tasked with rescuing a scientist and saving the world from a deadly fairness cream conspiracy.",
    },
    {
      id: "10",
      name: "Jockey",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00464571-brzspuhzaq-portrait.jpg",
      rating: 7.8,
      summary:
        "An intense sports drama that dives into the high-stakes world of horse racing. The film explores the physical and emotional challenges faced by a professional jockey fighting for pride and survival in the sport.",
    },
  ]);

  return (
    <div>
      <Routes>
        {/* Old users -> films */}
        <Route path="films" element={<Navigate replace to="/movies" />} />
        <Route
          path="/movies"
          element={
            <MovieList movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route path="/users" element={<Userlist />} />
        <Route path="/colorbox" element={<ColorGame />} />
        <Route
          path="movies/:id"
          element={<MovieDetails movieList={movieList} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Route path="/" element={<Userlist />} /> */}

      {/* <MovieList /> */}
    </div>
  );
}

function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  return (
    <>
      <h1>
        {id} - {movie.name}
      </h1>
    </>
  );
}
