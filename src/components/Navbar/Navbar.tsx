import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <ul className="menu">
      <li className={location?.pathname === "/" ? 'is-active' : ''}><a href="/">Advent of Code 2022 @ elektrolytmangel</a></li>
      <li className={location?.pathname === "/01" ? 'is-active' : ''}><a href="01">Day 01</a></li>
      <li className={location?.pathname === "/02" ? 'is-active' : ''}><a href="02">Day 02</a></li>
      <li className={location?.pathname === "/03" ? 'is-active' : ''}><a href="03">Day 03</a></li>
    </ul>
  );
}

export default Navbar;