import "./index.css";
// import { User } from "./User";
import { Movie } from "./Movie";

// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts
  const movieList = [
    {
      name: "Border 2",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00401449-yvzgkbpdca-portrait.jpg",
      rating: 7.5,
      summary:
        "A massive war drama sequel set during the 1971 Indo-Pak war. Sunny Deol returns as Major Kuldip Singh Chandpuri to lead a new battalion in a high-stakes battle for sovereignty, featuring intense tank warfare and patriotic sacrifice.",
    },
    {
      name: "Thalaivar Thambi Thalaimaiyil",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00481251-htxqsrdcwb-portrait.jpg",
      rating: 8.8,
      summary:
        "A chaotic comedy-drama starring Jiiva as a Panchayat President who gets trapped in a dilemma when a death occurs in one house and a wedding in the neighbor's house simultaneously, forcing him to manage the mayhem.",
    },
    {
      name: "Dhurandhar",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00452447-smmrnuhqrx-portrait.jpg",
      rating: 7.0,
      summary:
        "An espionage thriller featuring Ranveer Singh as Hamza, an undercover Indian intelligence agent who embeds himself deep within the Karachi mafia to dismantle terror operations from the inside.",
    },
    {
      name: "Hot Spot 2 Much",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00482307-akyreartuz-portrait.jpg",
      rating: 7.2,
      summary:
        "A bold anthology sequel that satirizes modern morality. The film weaves together stories about relationships, hypocrisy, and social stigmas, centered around a filmmaker pitching controversial scripts to a producer.",
    },
    {
      name: "Ikkis",
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ikkis-et00388415-1765283297.jpg",
      rating: 8.7,
      summary:
        "A biographical war drama directed by Sriram Raghavan, telling the untold story of Second Lieutenant Arun Khetarpal, the youngest recipient of the Param Vir Chakra, who fought bravely in the 1971 war.",
    },
    {
      name: "Draupathi 2",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00481466-fkumcpefau-portrait.jpg",
      rating: 6.5,
      summary:
        "A social drama that shifts between the modern day and the 14th century. It follows a man entangled in a land dispute who discovers a historical connection to a Hoysala commander protecting his kingdom from invaders.",
    },
    {
      name: "Rahu Ketu",
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rahu-ketu-et00462933-1768457264.jpg",
      rating: 8.0,
      summary:
        "A fantasy comedy where two unlucky characters from a writer's story, Rahu and Ketu (played by Varun Sharma and Pulkit Samrat), magically come to life and create cosmic chaos in the real world.",
    },
    {
      name: "Parasakthi",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00431398-kmxrrdfpbu-portrait.jpg",
      rating: 5.0,
      summary:
        "Set in the 1960s, this period drama starring Sivakarthikeyan focuses on the anti-Hindi imposition agitation in Tamil Nadu, following two brothers on opposite sides of the law during a turbulent political movement.",
    },
    {
      name: "Happy Patel: Khatarnak Jasoos",
      poster:
        "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/happy-patel-khatarnak-jasoos-et00473816-1766394630.jpg",
      rating: 6.0,
      summary:
        "A spy-comedy featuring Vir Das as Happy Patel, a ballet-dancing, sandwich-making misfit who is unexpectedly tasked with rescuing a scientist and saving the world from a deadly fairness cream conspiracy.",
    },
    {
      name: "Jockey",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/et00464571-brzspuhzaq-portrait.jpg",
      rating: 7.8,
      summary:
        "An intense sports drama that dives into the high-stakes world of horse racing. The film explores the physical and emotional challenges faced by a professional jockey fighting for pride and survival in the sport.",
    },
    // {
    //   poster: "../sample-images/image.png",
    // },
  ];

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      {/* prop - name */}
      {/* <Msg name="Nk" />
      <Msg name="Tara" />
      <Msg name="Pushpa" /> */}

      {/* solution 1 */}
      {/* {userDetails.map((details) => (
        <User name={details.name} url={details.url} />
      ))} */}

      {/* solution 2 */}

      {movieList.map(({ name, poster, rating, summary }) => (
        <Movie name={name} poster={poster} summary={summary} rating={rating} />
      ))}

      {/* <User
        name="Arjun"
        url="https://tse1.mm.bing.net/th/id/OIP.t1-t9FzCErAaW4X93_nIUgHaHa?pid=Api&P=0&h=180"
      />
      <User
        name="Surya"
        url="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
      />
      <User
        name="Rishi"
        url="https://tse1.mm.bing.net/th/id/OIP.V-iUPXL7-oSOAvR2dtdWiQHaHa?pid=Api&P=0&h=180"
      /> */}
    </div>
    // UI Ends
  );
}

// function Msg(props) {
//   const { name } = props;

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {name} 🎊</h1>
//     </div>
//   );
// }

// function Msg(props) {
//   console.log(props, typeof props);
//   // let name = "NK";

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {props.name} 🎊</h1>
//     </div>
//   );
// }

// function print(name) {
//   return `Hello, ${name}`;
// }

// print('nk')
// print('pusha')
// print('tara')

// Component Rules
// 1. Start with Capital (PascalCase)
// 2. Return JSX

// function Msg1() {
//   let name = "Suriya";
//   let followers = 100;

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {name} 🎊</h1>
//       <h2>
//         {name} has {followers * 2} followers
//       </h2>
//     </div>
//   );
// }

// JSX - JavaScript XML
// Babel -> JSX -> JS
// class -> reserverd keyword

// // Component = UI + Logic
// export default function App() {
//   // Logic Starts
//   let name = "Suriya";

//   // Logic Ends
//   return (
//     // UI Starts
//     <div className="App">
//       <input type="text" placeholder="Tell me your fav color" />
//       <h1 className="user-msg">Hello, Vikas 🎊</h1>
//     </div>
//     // UI Ends
//   );
// }

// // JSX - JavaScript XML
// // Babel -> JSX -> JS
// // class -> reserverd keyword
