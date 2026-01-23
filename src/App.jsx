import "./index.css";

// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      {/* prop - name */}
      {/* <Msg name="Nk" />
      <Msg name="Tara" />
      <Msg name="Pushpa" /> */}
      <User
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
      />
    </div>
    // UI Ends
  );
}

function Msg({ name }) {
  return (
    <div>
      <h1 className="user-msg">Hello, {name} 🎊</h1>
    </div>
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

function Msg1() {
  let name = "Suriya";
  let followers = 100;

  return (
    <div>
      <h1 className="user-msg">Hello, {name} 🎊</h1>
      <h2>
        {name} has {followers * 2} followers
      </h2>
    </div>
  );
}

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

function User({ name, url }) {
  return (
    <div className="box">
      <img className="img" src={url} />
      <p className="name">
        Hello, <span>{name}🎉🎉</span>
      </p>
    </div>
  );
}

