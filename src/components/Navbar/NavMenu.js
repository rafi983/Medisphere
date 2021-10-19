import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NavMenu.css";

const NavMenu = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="nav-brand fs-2 fw-bold" to="/">
          MediSphere
        </NavLink>

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/doctors">
                Doctors
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/equipments">
                Equipments
              </NavLink>
            </li>

            {user?.emailVerified ? (
              <li className="nav_link">
                <NavLink to="/login" className="nav-link" onClick={logOut}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav_link">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}
            {user?.emailVerified && (
              <div className="user-info ms-auto me-3 text-black">
                Hello, {user.displayName}
                {user.photoURL ? (
                  <img className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <img
                    className="user-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzgsi-SA54nLR0Nqw0bbSVKaUIaGnCN5KQQ&usqp=CAU"
                    alt=""
                  />
                )}
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
