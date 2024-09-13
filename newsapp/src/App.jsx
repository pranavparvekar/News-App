import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Hinews from "./Components/Hinews";
import "./App.css";
const categories = [
  "business",
  "general",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

function App() {
  const [user, setUser] = useState(null);

  const handleSignOut = () => {};

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Router>
        <Navbar user={user} handleSignOut={handleSignOut} />
        <div className="container">
          <div className="row">
            <div className="col">
              <Routes>
                <Route path="/" element={<Home />} />

                {categories.map((category) => (
                  <Route
                    key={category}
                    path={`/${category}`}
                    element={<Hinews category={category} />}
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
function Social() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          padding: 0,
          justifyContent: "space-around",
        }}
      >
        <li style={{ marginRight: "100px" }}>
          <a href="https://twitter.com/dailybugle">Twitter</a>
        </li>
        <li style={{ textAlign: "center" }}>
          <a href="https://www.facebook.com/dailybugle">Facebook</a>
        </li>
        <li style={{ marginLeft: "100px" }}>
          {" "}
          <a href="https://www.instagram.com/dailybugle">Instagram</a>
        </li>
      </ul>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="home-container"></div>
      <Social />
    </>
  );
}

export default App;
