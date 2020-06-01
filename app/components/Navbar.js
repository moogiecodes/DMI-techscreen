import React from 'react';
import { NavLink } from 'react-router-dom';

/** Top navigation bar for app */

export default function NavBar() {
  return (
    <div>
      <NavLink exact to="/" className="navbar-brand">
        Home
      </NavLink>
      <NavLink to="/new">Add Food</NavLink>
    </div>
  );
}
