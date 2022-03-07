import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, isLogged }) => {
  const username = user.length > 0 ? user[1].value : null;

  return (
    <>
      <nav className="navbar" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <h2 className="title">MyTask</h2>
          </Link>
        </div>
        <div className="navbar-end">
          {isLogged ? (
            <Link to="/profil">
              <button className="user">{username}</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="button is-primary">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
