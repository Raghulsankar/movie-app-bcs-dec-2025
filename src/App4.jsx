import "./index.css";
import { User } from "./User";
import { useState } from "react";

// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts
  const userDetails = [
    {
      name: "Arjun",
      url: "https://tse1.mm.bing.net/th/id/OIP.t1-t9FzCErAaW4X93_nIUgHaHa?pid=Api&P=0&h=180",
    },
    {
      name: "Surya",
      url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    },
    {
      name: "Rishi",
      url: "https://tse1.mm.bing.net/th/id/OIP.V-iUPXL7-oSOAvR2dtdWiQHaHa?pid=Api&P=0&h=180",
    },
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

      {userDetails.map(({ name, url }) => (
        // <> this is an react fragment
        <>
          <User name={name} url={url} />
          <Counter />
          {/* <Color /> */}
        </>
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

export function Counter({ needProgress }) {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
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
      {needProgress && <div className="counter-like-dislike">
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
      </div>}
      {/* Ternaroy operator */}
      {/* <p>{like - dislike >= 10 ? "you are awesome🚀" : "your are fun😜"}</p> */}
    </div>
  );
}

// function Color() {
//   const [color, setColor] = useState(0);
//   return <input type="text" />;
// }

// function Color() {
//   const [color, setColor] = useState("");

//   return (
//     <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
//       <input
//         type="text"
//         placeholder="Type a color (red, blue, green...)"
//         onChange={(e) => setColor(e.target.value)}
//       />
//     </div>
//   );
// }
