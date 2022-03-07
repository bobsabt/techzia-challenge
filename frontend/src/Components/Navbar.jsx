import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, isLogged }) => {
  const username = user.length > 0 ? user[1].value : null;

  return (
    <>
      <nav className="navbar" aria-label="main navigation">
        <div class="navbar-brand">
        <Link to="/">
          <h2 className="title">MyTask</h2>
        </Link>
        </div>
        <div className="navbar-start">
        {isLogged ? (
          <Link to="/profil">
            <button className="button is-primary">{username}</button>
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
