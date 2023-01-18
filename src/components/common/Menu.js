import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <Link to="#">Menu</Link>
      </li>
      <li>
        <Link to="/booking">Reservation</Link>
      </li>
      <li>
        <Link to="#">Order Online</Link>
      </li>
      <li>
        <Link to="#">Login</Link>
      </li>
    </ul>
  );
};

export default Menu;
