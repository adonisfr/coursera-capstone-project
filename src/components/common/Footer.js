import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src="/logo1.png" alt="logo" />
      <div className="footer-menu">
        <h5>Doormat Navigation</h5>
        <ul>
          <li>
            <Link className="custom-ul-li-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="/booking">
              Reservation
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="/order">
              Order Online
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-menu">
        <h5>Contact</h5>
        <ul>
          <li>
            <Link className="custom-ul-li-link" to="#">
              Adress
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="#">
              phone number
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="#">
              email
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-menu">
        <h5>Social Media Links</h5>
        <ul>
          <li>
            <Link className="custom-ul-li-link" to="#">
              Adress
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="#">
              phone number
            </Link>
          </li>
          <li>
            <Link className="custom-ul-li-link" to="#">
              email
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
