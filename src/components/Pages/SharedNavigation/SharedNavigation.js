import React from "react";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../../Firebase/useFirebase/useFirebase";
import "./SharedNavigation.css";
const SharedNavigation = () => {
  const { user, logOut } = useFirebase();
  const navStyle = {
    textDecoration: "none",
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand text-light fs-4 fw-bold" to="/">
            {/* <img src={image1} className="img-fluid" alt="" width="150" height="70"/> */}
            Travel
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto  mb-2 ms-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "#00cf5d" : "",
                        border: isActive ? "none" : "block",
                      };
                    }}
                  to="/"
                  className="nav-link navlist me-3"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "#00cf5d" : "",
                      border: isActive ? "none" : "block",
                    };
                  }}
                  to="/postBlog"
                  className="nav-link navlist me-3"
                >
                  Post Blog
                </NavLink>
              </li>

              {!user?.email ? (
                <li className="nav-item">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        backgroundColor: isActive ? "#00cf5d" : "",
                        border: isActive ? "none" : "block",
                      };
                    }}
                    to="/login"
                    className="nav-link"
                    href="#"
                  >
                    Log In
                  </NavLink>
                </li>
              ) : (
                <NavLink
            
                  className="nav-link"
                  onClick={logOut}
                  style={{marginTop:"10px"}}
                  to=""
                >
                  {/* <span>{user.displayName}</span> */}
                  Log Out
                </NavLink>
              )}
            </ul>

            <div className="ms-5">
              {!user.photoURL ? (
                <i className="fas fa-user-circle fs-1"></i>
              ) : (
                <img
                  className="rounded-circle"
                  src={user.photoURL}
                  height={50}
                  width={50}
                  alt="user"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SharedNavigation;
