import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  
  return (
    <nav className="mt-10 flex justify-center gap-10 text-2xl">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : " ",
            fontWeight: e.isActive ? "bold" : " ",
          };
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink to="/user">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-400" : " ",
                e.isActive ? "font-bold" : " ",
              ].join(" ")}
            >
              User
            </span>
          );
        }}
      </NavLink>

      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-400" : " ",
            e.isActive ? "font-bold" : " ",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Nav;