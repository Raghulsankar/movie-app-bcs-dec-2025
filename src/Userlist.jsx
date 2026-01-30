import "./index.css";
import { User } from "./User";

export function Userlist() {
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
    <div className="App">
      {userDetails.map(({ name, url }) => (
        <User name={name} url={url} />
      ))}
    </div>
  );
}
