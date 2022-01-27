import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Firebase/useFirebase/useFirebase";
const SharedNavigation = () => {
  

  const {user,logOut}=useFirebase();
  const navStyle = {
    textDecoration: "none",
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
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
                  <Link style={navStyle} to="/" className="nav-link active me-3" aria-current="page">
                    Home
                  </Link>
                </li>
            
             
                <li className="nav-item">
                  <Link style={navStyle} to="/help" className="nav-link me-3">
                    Post Blog
                  </Link>
                </li>
              

             
               
                {!user?.email ? (
               
               <li className="nav-item">
                 <Link style={navStyle} to="/login" className="nav-link" href="#">
                   Log In
                 </Link>
               </li>
            
           ) : (
             <li className="nav-item">
               {/* <span>{user.displayName}</span> */}
               <a onClick={logOut} className="nav-link" href="#">
                 Log Out
               </a>
             </li>
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
