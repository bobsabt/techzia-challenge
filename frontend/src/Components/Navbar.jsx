import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, isLogged }) => {
  const username = user.length > 0 ? user[1].value : null;

  return (
    <div>
      <nav className="navbar" aria-label="main navigation">
        <Link to="/">
          <h2 className="title is-2">Title </h2>
        </Link>
        {isLogged ? (
          <Link to="/profil">
            <button class="button is-primary">{username}</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="button is-primary">Login</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
