import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = ({ routes, url = "" }) => {
  return (
    <NavigationStyled>
      <ul className='NavList'>
        {routes.map(({ path, exact, name }) => (
          <NavLink
            key={path}
            to={url + path}
            exact={exact}
            className="NavLink"
            activeClassName="activeNavLink"
          >
            {name}
          </NavLink>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
