import "./index.css";
import { User } from "../User";
import { Counter } from "../Counter";

export default function App() {
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

  return (
    // UI Starts
    <div className="App">
      {userDetails.map(({ name, url }) => (
        // <> this is an react fragment
        <>
          <User name={name} url={url} />
          <Counter />
          {/* <Color /> */}
        </>
      ))}
    </div>
  );
}
