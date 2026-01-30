import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";

export default function App() {
  return (
    <div className="App">
      {/* Settings - All pages */}
      <nav>
        <a href="/about">About</a> | <a href="/contact">Contact</a>
      </nav>

      <h2>With Link - Avoid Referesh</h2>

      {/* mandatory use nav tag after Link tag  */}
      <nav>
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |
        <Link to="/service">Service</Link>
      </nav>

      <Routes>
        {/* Matching is here */}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>This is an Contact Page</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>This is an About Page</h1>
    </div>
  );
}

function Service() {
  return (
    <div>
      <h1>this is service page</h1>
    </div>
  );
}
