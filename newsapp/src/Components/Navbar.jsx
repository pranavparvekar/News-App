import React from "react";
import { NavLink } from "react-router-dom";
import Weather from "./Weather";
import CurrentTime from "./Time";

const Navbar = () => {
  return (
    <div>
      <div
        className="navbar-brand"
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Times New Roman, serif",
          fontSize: "3em",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          width: "100%",
          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          background: "#011e29",
          justifyContent: "center",
          marginLeft: "auto",
        }}
      >
        <span style={{ flex: 1, textAlign: "center" }}>| DAILY📰BUGLE |</span>
        <CurrentTime />
      </div>

      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: "linear-gradient(360deg, #00feba 0%, white 100%)",

          boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
        }}
      >
        <div
          className="container-fluid"
          style={{ animation: "slideInFromLeft 1s ease-in-out" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ marginTop: "0px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-success"
                  to="/business"
                  activeclassname="active-link"
                >
                  Business💼
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-danger"
                  to="/general"
                  activeclassname="active-link"
                >
                  General🌐
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-warning"
                  to="/entertainment"
                  activeclassname="active-link"
                >
                  Entertainment🎭
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-info"
                  to="/health"
                  activeclassname="active-link"
                >
                  Health🏥
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-secondary"
                  to="/science"
                  activeclassname="active-link"
                >
                  Science🔬
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-info"
                  to="/sports"
                  activeclassname="active-link"
                >
                  Sports⚽
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-dark"
                  to="/technology"
                  activeclassname="active-link"
                >
                  Technology💻
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Weather />
      </nav>
    </div>
  );
};

export default Navbar;
