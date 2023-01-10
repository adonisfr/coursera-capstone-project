import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/booking">Reservation</Link>
      </li>
      <li>
        <Link to="/order">Order Online</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};

export default Menu;
