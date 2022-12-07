import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <ul className="menu">
      <li className={location?.pathname === "/" ? 'is-active' : ''}><NavLink to="/">Advent of Code 2022 @ elektrolytmangel</NavLink></li>
      <li className={location?.pathname === "/01" ? 'is-active' : ''}><NavLink to="01">Day 01</NavLink></li>
      <li className={location?.pathname === "/02" ? 'is-active' : ''}><NavLink to="02">Day 02</NavLink></li>
      <li className={location?.pathname === "/06" ? 'is-active' : ''}><NavLink to="06">Day 06</NavLink></li>
      <li className={location?.pathname === "/07" ? 'is-active' : ''}><NavLink to="07">Day 07</NavLink></li>
    </ul>
  );
}

export default Navbar;